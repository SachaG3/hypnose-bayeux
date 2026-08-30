export const CONTACT_BODY_LIMIT_BYTES = 16_000;

export type ValidContactMessage = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ValidationResult =
  | { ok: true; value: ValidContactMessage }
  | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u;
const MINIMUM_COMPLETION_TIME_MS = 2_000;
const MAXIMUM_FORM_AGE_MS = 24 * 60 * 60 * 1_000;

export function validateContactPayload(input: unknown, now = Date.now()): ValidationResult {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { ok: false, error: 'Le contenu de la demande est invalide.' };
  }

  const payload = input as Record<string, unknown>;
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';
  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';
  const website = typeof payload.website === 'string' ? payload.website.trim() : '';
  const startedAt = typeof payload.startedAt === 'number' ? payload.startedAt : Number.NaN;

  if (website) return { ok: false, error: 'La demande ne peut pas être envoyée.' };
  if (!Number.isFinite(startedAt) || now - startedAt < MINIMUM_COMPLETION_TIME_MS) {
    return { ok: false, error: 'Veuillez patienter quelques instants avant d’envoyer le formulaire.' };
  }
  if (startedAt > now || now - startedAt > MAXIMUM_FORM_AGE_MS) {
    return { ok: false, error: 'Le formulaire a expiré. Veuillez recharger la page.' };
  }
  if (payload.consent !== true) {
    return { ok: false, error: 'Le consentement au traitement des données est requis.' };
  }
  if (!name) return { ok: false, error: 'Le nom est requis.' };
  if (/[\r\n\0]/u.test(name) || /[\r\n\0]/u.test(phone)) {
    return { ok: false, error: 'Le nom ou le téléphone contient des caractères interdits.' };
  }
  if (name.length > 100) return { ok: false, error: 'Le nom est trop long.' };
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { ok: false, error: 'Un email valide est requis.' };
  }
  if (!phone) return { ok: false, error: 'Le numéro de téléphone est requis.' };
  if (phone.length > 30) return { ok: false, error: 'Le numéro de téléphone est trop long.' };
  if (!message) return { ok: false, error: 'Le message est requis.' };
  if (message.length > 5_000) return { ok: false, error: 'Le message est trop long.' };

  return { ok: true, value: { name, email, phone, message } };
}

type RateLimitEntry = { count: number; resetAt: number };
export type RateLimitResult = { allowed: boolean; retryAfterSeconds: number };

export class ContactRateLimiter {
  private readonly entries = new Map<string, RateLimitEntry>();

  constructor(
    private readonly maximumRequests = 3,
    private readonly windowMs = 10 * 60 * 1_000,
  ) {}

  check(key: string, now = Date.now()): RateLimitResult {
    const current = this.entries.get(key);
    if (!current || current.resetAt <= now) {
      this.entries.set(key, { count: 1, resetAt: now + this.windowMs });
      this.prune(now);
      return { allowed: true, retryAfterSeconds: 0 };
    }

    if (current.count >= this.maximumRequests) {
      return {
        allowed: false,
        retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1_000)),
      };
    }

    current.count += 1;
    return { allowed: true, retryAfterSeconds: 0 };
  }

  private prune(now: number) {
    if (this.entries.size < 1_000) return;
    for (const [key, entry] of this.entries) {
      if (entry.resetAt <= now) this.entries.delete(key);
    }
  }
}

import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import {
  CONTACT_BODY_LIMIT_BYTES,
  ContactRateLimiter,
  validateContactPayload,
} from '@/lib/contact';

const rateLimiter = new ContactRateLimiter();
const textEncoder = new TextEncoder();

function clientIdentifier(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown';
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) return true;

  try {
    const requestUrl = new URL(request.url);
    const forwardedHost = request.headers.get('x-forwarded-host');
    return new URL(origin).host === (forwardedHost || requestUrl.host);
  } catch {
    return false;
  }
}

function jsonError(error: string, status: number, headers?: HeadersInit) {
  return NextResponse.json({ error }, { status, headers });
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return jsonError('Origine de la demande non autorisée.', 403);
  }

  const rateLimit = rateLimiter.check(clientIdentifier(request));
  if (!rateLimit.allowed) {
    return jsonError('Trop de demandes ont été envoyées. Veuillez réessayer plus tard.', 429, {
      'Retry-After': String(rateLimit.retryAfterSeconds),
    });
  }

  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return jsonError('Le format de la demande doit être JSON.', 415);
  }

  const announcedLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(announcedLength) && announcedLength > CONTACT_BODY_LIMIT_BYTES) {
    return jsonError('La demande est trop volumineuse.', 413);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonError('Impossible de lire la demande.', 400);
  }

  if (textEncoder.encode(rawBody).byteLength > CONTACT_BODY_LIMIT_BYTES) {
    return jsonError('La demande est trop volumineuse.', 413);
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(rawBody);
  } catch {
    return jsonError('Le contenu de la demande est invalide.', 400);
  }

  const validation = validateContactPayload(parsedBody);
  if (!validation.ok) return jsonError(validation.error, 400);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === 're_VOTRE_CLE_API_ICI') {
    console.error('RESEND_API_KEY is missing.');
    return jsonError('Le service de messagerie est temporairement indisponible.', 503);
  }

  const recipients = (process.env.CONTACT_EMAIL_TO || 'contact@hypnose-bayeux.fr')
    .split(',')
    .map((recipient) => recipient.trim())
    .filter(Boolean);
  const sender = process.env.CONTACT_EMAIL_FROM || 'Contact <contact@hypnose-bayeux.fr>';
  const { name, email, phone, message } = validation.value;

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: sender,
      to: recipients,
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      text: [
        'Nouveau message de contact :',
        '',
        `Nom : ${name}`,
        `Email : ${email}`,
        `Téléphone : ${phone}`,
        '',
        'Message :',
        message,
      ].join('\n'),
    });

    if (result.error) {
      console.error('Resend rejected a contact email:', result.error.name);
      return jsonError('Le message n’a pas pu être envoyé. Veuillez réessayer plus tard.', 502);
    }

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error('Contact email delivery failed:', error instanceof Error ? error.name : 'UnknownError');
    return jsonError('Le message n’a pas pu être envoyé. Veuillez réessayer plus tard.', 502);
  }
}

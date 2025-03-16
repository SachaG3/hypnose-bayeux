import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Vérifier si la clé API est configurée
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey || resendApiKey === 're_VOTRE_CLE_API_ICI') {
  console.error('⚠️ La clé API Resend n\'est pas configurée correctement. Veuillez configurer votre clé API dans le fichier .env');
}

// Initialiser Resend avec la clé API
const resend = new Resend(resendApiKey);

// Fonction pour valider l'email
const isValidEmail = (email: string) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regex.test(email);
};

export async function POST(request: Request) {
  try {
    // Vérifier si la clé API est configurée
    if (!resendApiKey || resendApiKey === 're_VOTRE_CLE_API_ICI') {
      return NextResponse.json(
        { error: 'La clé API Resend n\'est pas configurée. Veuillez configurer votre clé API dans le fichier .env' },
        { status: 500 }
      );
    }

    // Récupérer les données du formulaire
    const { name, email, phone, message } = await request.json();

    // Validation des champs
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Le nom est requis' },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Un email valide est requis' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Le message est requis' },
        { status: 400 }
      );
    }

    // Téléphone est facultatif, mais vérifions qu'il est formaté correctement s'il est fourni
    const phoneFormatted = phone ? phone : 'Non fourni';

    // Formatter l'email
    try {
      const { data, error } = await resend.emails.send({
        from: 'Contact <contact@bayeuxhypnose.fr>',
        to: ['drguignard@gmail.com','nadege.antik@wanadoo.fr','sacha.guignard03@gmail.com'], // Remplacez par votre adresse email réelle
        subject: `Nouveau message de ${name}`,
        replyTo: email,
        text: `
Nouveau message de contact:

Nom: ${name}
Email: ${email}
Téléphone: ${phoneFormatted}

Message:
${message}
        `,
      });

      if (error) {
        console.error('Erreur Resend:', error);
        
        // Gérer spécifiquement l'erreur de clé API invalide
        if (error.message && error.message.includes('API key is invalid')) {
          return NextResponse.json(
            { error: 'La clé API Resend est invalide. Veuillez vérifier votre clé API dans le fichier .env' },
            { status: 500 }
          );
        }
        
        return NextResponse.json(
          { error: `Erreur lors de l'envoi de l'email: ${error.message}` },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { 
          success: true, 
          message: 'Email envoyé avec succès',
          data 
        }
      );
    } catch (resendError) {
      console.error('Erreur lors de l\'envoi avec Resend:', resendError);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email via Resend' },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Erreur lors du traitement de la demande:', error);
    return NextResponse.json(
      { error: 'Erreur lors du traitement de la demande' },
      { status: 500 }
    );
  }
} 
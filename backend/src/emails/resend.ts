import { Resend } from 'resend';
import { ENV } from 'src/lib/env';
import { createWelcomeEmailTemplate } from './emailTemplate';

const resend = new Resend(ENV.RESEND_API_KEY);

export async function reSendEmail(name: string) {
    const { data, error } = await resend.emails.send({
        from: 'Octopus <onboarding@resend.dev>',
        to: ENV.RESEND_RECEIVER_EMAIL as string,
        subject: 'Вітання!',
        html: createWelcomeEmailTemplate(name, ENV.BASE_URL),
  })

  if (error) {
    return console.error({ error });
  }
}


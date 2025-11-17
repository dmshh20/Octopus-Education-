import { Resend } from 'resend';
import { ENV } from 'src/lib/env';
import { createWelcomeEmailTemplate } from './emailTemplate';

const resend = new Resend(ENV.RESEND_API_KEY);

export async function reSendEmail(name: string) {
    if (!ENV.RESEND_RECEIVER_EMAIL) {
        throw new Error('RESEND_RECEIVER_EMAIL enviroment variable is required')
    }
    if(!ENV.BASE_URL) {
        throw new Error('BASE_URL enviroment variable is required')
    }

    const { data, error } = await resend.emails.send({
        from: 'Octopus <onboarding@resend.dev>',
        to: ENV.RESEND_RECEIVER_EMAIL,
        subject: 'Вітання!',
        html: createWelcomeEmailTemplate(name, ENV.BASE_URL),
  })

  if (error) {
    throw new Error(`Failed Resend Email, ${error.message}`)
}
}


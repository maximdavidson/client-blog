import { send } from '@emailjs/browser';

interface EmailParams {
  [key: string]: string;
}

export const sendEmail = async (templateParams: EmailParams): Promise<void> => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    await send(serviceId, templateId, templateParams, userId);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

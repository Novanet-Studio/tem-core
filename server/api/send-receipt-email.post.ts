import { useCompiler } from '#vue-email';
import sgMail from '@sendgrid/mail';
import { stringTemplates } from '../utils';

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    const { sendgrid } = useRuntimeConfig();
    const { email } = useAppConfig(event);

    const template = await useCompiler('receipt.vue', {
      props: {
        preview: email.receipt.template.preview,
        theme: email.receipt.template.theme,
        header: email.receipt.template.header,
        body: {
          ...data,
        },
        footer: email.receipt.template.footer,
      },
    });

    sgMail.setApiKey(sendgrid.apiKey);

    const payload = {
      to: data.email,
      from: sendgrid.senderEmail,
      subject: stringTemplates(email.receipt.subject, data),
      text: email.receipt.text,
      html: template,
    };

    await sgMail.send(payload);

    return {
      message: 'Email enviado',
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return createError({
      statusCode: 500,
      statusMessage: 'Error enviando el email del recibo',
    });
  }
});

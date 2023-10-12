import { useCompiler } from '#vue-email';
import sgMail from '@sendgrid/mail';
import { stringTemplates } from '../utils';

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    const { sendgrid } = useRuntimeConfig();
    const { email } = useAppConfig(event);

    const template = await useCompiler('merchant.vue', {
      props: {
        preview: email.merchant.template.preview,
        theme: email.merchant.template.theme,
        header: email.merchant.template.header,
        body: {
          ...data,
        },
        footer: email.merchant.template.footer,
      },
    });

    sgMail.setApiKey(sendgrid.apiKey);

    const payload = {
      to: sendgrid.receiverEmail,
      from: sendgrid.senderEmail,
      subject: stringTemplates(email.merchant.subject, data),
      text: email.merchant.text,
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

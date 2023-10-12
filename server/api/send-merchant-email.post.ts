import { useCompiler } from '#vue-email';
import sgMail from '@sendgrid/mail';

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    const { sendgrid } = useRuntimeConfig();

    const template = await useCompiler('receipt.vue', {
      props: {
        body: {
          ...data,
        },
      },
    });

    sgMail.setApiKey(sendgrid.apiKey);

    const payload = {
      to: sendgrid.receiverEmail,
      from: sendgrid.senderEmail,
      subject: `CCS MultiSport nueva orden ${data.orderId}`,
      text: 'CCS MultiSport nueva orden',
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

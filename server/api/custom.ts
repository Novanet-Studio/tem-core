import { stringTemplates } from '../utils';

export default defineEventHandler(async (event) => {
  try {
    const { email } = useAppConfig(event);

    const data = {
      orderId: 1,
      nameCustomer: 'David Arenas',
    };

    return {
      message: 'Email enviado',
      data: {
        subject: stringTemplates(email.receipt.subject, data),
      },
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

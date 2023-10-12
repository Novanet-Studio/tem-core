import type { CreatePaymentRequest, Payment } from 'square';

interface PaymentResponse extends Payment {
  version: bigint;
}

export default defineEventHandler(async (event) => {
  try {
    const data = (await readBody(event)) as CreatePaymentRequest;
    const body = {
      idempotency_key: data.idempotencyKey,
      location_id: data.locationId,
      source_id: data.sourceId,
      customer_id: data.customerId,
      amount_money: {
        amount: data.amountMoney?.amount,
        currency: data.amountMoney?.currency,
      },
      buyer_email_address: data.buyerEmailAddress,
      shipping_address: {
        address_line1: data.shippingAddress?.addressLine1,
        locality: data.shippingAddress?.locality,
        postal_code: data.shippingAddress?.postalCode,
        country: data.shippingAddress?.country,
      },
      billing_address: {
        address_line1: data.billingAddress?.addressLine1,
        locality: data.billingAddress?.locality,
        postal_code: data.billingAddress?.postalCode,
        country: data.billingAddress?.country,
      },
      note: data.note,
    };

    const response = await $fetch<any>(
      'https://connect.squareupsandbox.com/v2/payments',
      {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Square-Version': '2023-08-16',
          Authorization:
            'Bearer EAAAEJyncqd3OPpoDxFbqfbNjmfeDnM_8OZmPxgUfk-ifWbwexuPqMaAUACyfdbs',
        },
      }
    );
    const parsedResponse = JSON.stringify(response, (_, value) =>
      typeof value === 'bigint' ? value.toString() : value
    );
    const { payment } = JSON.parse(parsedResponse);

    return {
      data: payment as PaymentResponse,
    };
  } catch (error) {
    console.log(error);
    return createError({
      statusCode: 500,
      statusMessage: 'Error procesando el pago',
    });
  }
});

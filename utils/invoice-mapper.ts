type Base = Record<string, string>;

const invoiceMapperHelper = <T extends Base, U extends Base>(
  invoice: T,
  index: number,
  locale = 'es-VE'
): U => {
  const isVE = locale === 'es-VE';

  const en = invoice.paid ? 'Paid' : 'Pending';
  const es = invoice.paid ? 'Pagado' : 'Pendiente';

  const invoices = {
    ...invoice,
    id_invoice_user: index + 1,
    date: new Date(invoice?.createdAt as unknown as string).toLocaleDateString(
      locale
    ),
    status: isVE ? es : en,
  };

  return invoices as unknown as U;
};

export default invoiceMapperHelper;

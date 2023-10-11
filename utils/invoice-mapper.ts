type Base = Record<string, string>;

const invoiceMapperHelper = <T extends Base, U extends Base>(
  invoice: T,
  index: number
): U => {
  const invoices = {
    ...invoice,
    id_invoice_user: index + 1,
    date: new Date(invoice?.createdAt as unknown as string).toLocaleDateString(
      'es-VE'
    ),
    status: invoice.paid ? 'Pagado' : 'Pendiente',
  };

  return invoices as unknown as U;
};

export default invoiceMapperHelper;

const getDate = (custom = ''): string => {
  const date = custom ? new Date(custom) : new Date();
  const day = date.getDay().toString().padStart(2, '0');
  const month = date.getMonth().toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  const formatted = `${year}-${month}-${day}`;

  return formatted;
};

export default getDate;

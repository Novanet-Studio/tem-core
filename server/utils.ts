const replaceString = (
  match: string,
  key: string,
  data: Record<string, any>
) => {
  if (data.hasOwnProperty(key)) {
    return data[key];
  }

  return match;
};

export const stringTemplates = (str: string, data: Record<string, any>) => {
  const regex = /%([^%]+)%/g;

  return str.replace(regex, (match, key) => {
    return replaceString(match, key, data);
  });
};

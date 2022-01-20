const onlyCharsWithHyphen = /[^ 'A-Za-zÀ-ÖØ-öø-ÿ-]/g;

export const getStringInitials = (text = ''): string => {
  const first = text.replace(onlyCharsWithHyphen, '');
  const textIndex = first.indexOf(' ') + 1;
  return `${first.charAt(0)}${
    textIndex ? first.charAt(textIndex) : ''
  }`.toUpperCase();
};

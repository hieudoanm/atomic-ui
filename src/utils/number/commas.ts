export const commas = (num: number) => {
  if (typeof num !== 'number') return '';
  return num.toLocaleString('en-US');
};

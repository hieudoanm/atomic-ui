// Format number as currency (default USD, configurable)
export const currency = (value: number, currency = 'USD', locale = 'en-US') => {
  if (typeof value !== 'number') return '';
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
};

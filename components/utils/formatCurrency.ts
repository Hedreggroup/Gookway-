export const formatCurrency = (value: number, locale: string = 'en-NG', currency: string = 'NGN'): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
};
export function formatPrice(price) {
  const priceFormater = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });
  return priceFormater.format(price);
}

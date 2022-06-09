export function formatPrice(price) {
  const priceFormater = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });
  return priceFormater.format(price);
}

export const getAdsFromProductId = (ads, productId) => {
  const productAds = ads.filter((ad) => ad.productId === productId);
  return productAds;
};

export const countAdsFromProductId = (ads, productId) => {
  return getAdsFromProductId(ads, productId).length;
};

export const getProductFromProductId = (products, productId) => {
  const product = products.find((product) => product.id === productId);
  return product;
};

export const getAdFromId = (ads, adId) => {
  const ad = ads.find((ad) => ad.id === adId);
  return ad;
}
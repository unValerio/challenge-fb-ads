import { useParams } from "react-router-dom";

import useStore from '../../store/useStore';
import { getAdsFromProductId, getProductFromProductId } from '../../utils/helpers';

export default function useReadView() {
  const params = useParams();
  const { store } = useStore();
  const { products, ads } = store;
  const productAds = getAdsFromProductId(ads, params.productId);
  const product = getProductFromProductId(products, params.productId);

  return { product, ads: productAds };
}
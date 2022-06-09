import { useParams, useNavigate } from "react-router-dom";

import useStore from '../../store/useStore';
import { getProductFromProductId, getAdFromId } from '../../utils/helpers';
import useForm from '../../hooks/useForm';

export default function useCreateView() {
  const params = useParams();
  const navigate = useNavigate();
  const { store, actions } = useStore();
  const { products, ads } = store;
  const product = getProductFromProductId(products, params.productId);
  const ad = getAdFromId(ads, params.adId);

  const { onChange, onSubmit, values } = useForm(formCallback);

  async function formCallback() {
    actions.updateAd(ad.id, { ...ad, ...values });
    alert('Ad successfully updated');
    navigate(`/products/${product.id}`);
  }

  return { product, ad, onChange, onSubmit };
}
import { useParams, useNavigate } from "react-router-dom";

import useStore from '../../store/useStore';
import useNotifications from '../../notifications/useNotifications';
import { getProductFromProductId, getAdFromId } from '../../utils/helpers';
import useForm from '../../hooks/useForm';

export default function useCreateView() {
  const params = useParams();
  const navigate = useNavigate();
  const { enqueueNotification } = useNotifications();
  const { store, actions } = useStore();
  const { products, ads } = store;
  const product = getProductFromProductId(products, params.productId);
  const ad = getAdFromId(ads, params.adId);

  const { onChange, onSubmit, values } = useForm(formCallback);

  async function formCallback() {
    actions.updateAd(ad.id, { ...ad, ...values });
    enqueueNotification({ message: 'Ad successfully updated' });
    navigate(`/products/${product.id}`);
  }

  return { product, ad, onChange, onSubmit };
}
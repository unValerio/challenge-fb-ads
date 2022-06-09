import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import useStore from '../../store/useStore';
import useNotifications from '../../notifications/useNotifications';
import { getProductFromProductId } from '../../utils/helpers';
import useForm from '../../hooks/useForm';

export default function useCreateView() {
  const params = useParams();
  const navigate = useNavigate();
  const { enqueueNotification } = useNotifications();
  const { store, actions } = useStore();
  const { products } = store;
  const product = getProductFromProductId(products, params.productId);

  const { onChange, onSubmit, values } = useForm(formCallback, {});

  async function formCallback() {
    const id = uuidv4();
    const productId = product.id;
    const ad = { id, productId, ...values };
    actions.createNewAd(ad);
    enqueueNotification({ message: 'New ad successfully created' });
    navigate(`/products/${productId}`);
  }

  return { product, onChange, onSubmit };
}
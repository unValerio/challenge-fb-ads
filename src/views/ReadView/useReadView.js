import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useStore from '../../store/useStore';
import { getAdsFromProductId, getAdFromId, getProductFromProductId } from '../../utils/helpers';

export default function useReadView() {
  const params = useParams();
  const navigate = useNavigate();
  const { store, actions } = useStore();
  const { products, ads } = store;

  const [showModal, setShowModal] = useState(false);
  const [adToDelete, setAddToDelete] = useState();

  const productAds = getAdsFromProductId(ads, params.productId);
  const product = getProductFromProductId(products, params.productId);

  const onDelete = (adId) => {
    setAddToDelete(getAdFromId(ads, adId));
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
    setAddToDelete(undefined);
  }

  const onConfirm = () => {
    setShowModal(false);
    actions.deleteAd(adToDelete.id);
    setAddToDelete(undefined);
    alert('Ad successfully deleted');
    navigate(`/`);
  }

  return { product, ads: productAds, showModal, adToDelete, onDelete, onClose, onConfirm };
}
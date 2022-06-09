import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import DeleteView from '../DeleteView';
import useReadView from './useReadView';
import './ReadView.css';

function ReadView() {
  const {
    product,
    ads,
    showModal,
    adToDelete,
    onDelete,
    onClose,
    onConfirm,
  } = useReadView();

  return (
    <>
      <h1>Facebook Ads of {product.productName}</h1>

      <Link to={`/products/${product.id}/ads/create`}>
        <Button iconName="bx-plus" title="Create a new add" />
      </Link>
      {ads.length === 0 && (
        <div>This product doesn't have Ads yet. Try to create a new one!</div>
      )}
      <div>
        {ads.map((ad) => (
          <div key={ad.id}>
            {JSON.stringify(ad, null, 2)}
            <Link to={`/products/${product.id}/ads/${ad.id}`}>
              <Button iconName="bx-pencil" />
            </Link>&nbsp;
            <Button iconName="bx-trash" onClick={() => onDelete(ad.id)} />
          </div>
        ))}
      </div>

      <DeleteView
        onClose={onClose}
        onConfirm={onConfirm}
        showModal={showModal}
        adToDelete={adToDelete}
      />
    </>
  );
}

export default ReadView;

import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import Box from '../../components/Box';
import FacebookAd from '../../components/FacebookAd';
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
      <h1 className='title'>{product.productName} - List of Ads</h1>

      <Link className='new-ad' to={`/products/${product.id}/ads/create`}>
        <Button iconName="bx-plus" title="Create a new Ad" />
      </Link>

      {ads.length === 0 && (
        <div>This product doesn't have Ads yet. Try to create a new one!</div>
      )}

      {ads.map((ad) => (
        <Box key={ad.id}>
          <Link to={`/products/${product.id}/ads/${ad.id}`}>
            <Button iconName="bx-pencil" title="Edit" />
          </Link>&nbsp;
          <Button iconName="bx-trash" title="Delete" onClick={() => onDelete(ad.id)} />
          <h3 className='headline-title'>{ad.id} - {ad.headline}</h3>
          <FacebookAd ad={ad} />
        </Box>
      ))}

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

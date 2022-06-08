import { Link } from 'react-router-dom';

import useStore from '../../store/useStore';
import { formatPrice } from '../../utils/helpers';
import './IndexView.css';

const countAdsFromProductId = (ads, productId) => {
  const productAds = ads.filter((ad) => ad.productId === productId);
  return productAds.length;
};

function IndexView() {
  const { store } = useStore();
  const { products, ads } = store;

  return (
    <div className="box-wrapper">
      {products.map((product) => (
        <div className='box-container' key={product.id}>
          <div className='box-content'>
            <div className='box-column'>
              <img className='box-image' src={product.productImage} alt="" />
            </div>
            <div className='box-column box-right-column'>
              <Link className="box-name" to={`/products/${product.id}`}>
                {product.productName}
                <div className="indicator">
                  <span className='ads-counter'>{countAdsFromProductId(ads, product.id)}</span>
                  <span className="text">{countAdsFromProductId(ads, product.id) === 1 ? 'Ad' : 'Ads'}</span>
                </div>
              </Link>
              <div className='box-price'>Price: {formatPrice(product.price)}</div>
              <span className='box-description'>{product.productDescription}</span>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default IndexView;

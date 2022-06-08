import './IndexView.css';

import { formatPrice } from '../../utils/helpers';

// TODO: Get products from store when API is available
import products from './products.json';

function IndexView() {
  return (
    <div className="box-wrapper">

      {products.map((product) => (
        <div className='box-container' key={product.id}>
          <div className='box-content'>
            <div className='box-column'>
              <img className='box-image' src={product.productImage} alt="" />
            </div>
            <div className='box-column box-right-column'>
              <div className='box-name'>
                {product.productName}
                <div className="indicator">
                  <span className='ads-counter'>4</span>
                  <span className="text">Ads in total</span>
                </div>
              </div>
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

import { Link } from 'react-router-dom';

import './NavigationView.css';

function NavigationView() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <i className='bx bx-cart'></i>
        <span className="page-name">Sporting Goods</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link className="internal-link" to="/">
            <i className='bx bx-list-ul'></i>
            <span className="link-title">Product list</span>
          </Link>
          <Link className="internal-link" to="/products/001">
            <i className='bx bx-list-ul'></i>
            <span className="link-title">Read</span>
          </Link>
          <Link className="internal-link" to="/products/001/ads/create">
            <i className='bx bx-list-ul'></i>
            <span className="link-title">Create</span>
          </Link>
          <Link className="internal-link" to="/products/001/ads/123">
            <i className='bx bx-list-ul'></i>
            <span className="link-title">Update</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationView;

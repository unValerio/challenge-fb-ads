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
        </li>
      </ul>
    </div>
  );
}

export default NavigationView;

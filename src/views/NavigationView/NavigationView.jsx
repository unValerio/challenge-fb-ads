import { Link } from 'react-router-dom';

import './NavigationView.css';

function NavigationView() {
  return (
    <ul className="nav-links">
      <li>
        <Link className="internal-link" to="/">
          <i className='bx bx-list-ul'></i>
          <span className="link-title">List of products</span>
        </Link>
        <Link className="internal-link" to="/products/234">
          <i className='bx bx-list-ul'></i>
          <span className="link-title">Read</span>
        </Link>
        <Link className="internal-link" to="/products/234/ads/create">
          <i className='bx bx-list-ul'></i>
          <span className="link-title">Create</span>
        </Link>
        <Link className="internal-link" to="/products/234/ads/123">
          <i className='bx bx-list-ul'></i>
          <span className="link-title">Update</span>
        </Link>
      </li>
    </ul>
  );
}

export default NavigationView;

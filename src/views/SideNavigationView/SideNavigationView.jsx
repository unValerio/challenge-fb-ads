import './SideNavigationView.css';

function SideNavigationView() {
  return (
    <ul className="nav-links">
      <li>
        <a href="#" className="active">
          <i className='bx bx-list-ul' ></i>
          <span className="link-title">List of products</span>
        </a>
      </li>
    </ul>
  );
}

export default SideNavigationView;

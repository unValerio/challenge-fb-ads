import SideNavigationView from '../SideNavigationView';
import TopNavigationView from '../TopNavigationView';
import './RootView.css';

function RootView() {
  return (
    <>
      <div className="sidebar">
        <div className="logo-container">
          <i className='bx bx-cart'></i>
          <span className="page-name">MyShop</span>
        </div>
        <SideNavigationView />
      </div>
      <section className="main-section">
        <TopNavigationView />
        <div className="main-content"></div>
      </section>
    </>
  );
}

export default RootView;

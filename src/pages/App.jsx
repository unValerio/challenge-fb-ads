import './App.css';

function App() {
  return (
    <>
      <div className="sidebar">
        <div className="logo-container">
          <i className='bx bx-cart'></i>
          <span className="page-name">MyShop</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className='bx bx-list-ul' ></i>
              <span className="link-title">List of products</span>
            </a>
          </li>
        </ul>
      </div>

      <section className="main-section">
        <nav>
          <div className="sidebar-button">
            <span className="bar-title">List of products</span>
          </div>
        </nav>

        <div className="main-content"></div>
      </section>
    </>
  );
}

export default App;

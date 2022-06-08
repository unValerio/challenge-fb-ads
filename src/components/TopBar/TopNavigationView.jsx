import useIsHomePage from '../../hooks/useIsHomepage';
import GoBackButton from '../GoBackButton';
import './TopNavigationView.css';

function TopNavigationView() {
  const isHomePage = useIsHomePage();

  return (
    <nav>
      <div className="navigation-button">
        <span className="bar-title"></span>
        {!isHomePage && (<GoBackButton />)}
      </div>
    </nav>
  );
}

export default TopNavigationView;

import { Outlet } from "react-router-dom";
import TopBar from "../TopBar";

import './Layout.css';

function Layout() {
  return (
    <>
      <TopBar />
      <div className="main-content">
        <div className="box-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;

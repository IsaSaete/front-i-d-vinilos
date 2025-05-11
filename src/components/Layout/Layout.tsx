import { Outlet } from "react-router";
import Header from "../Header/Header";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="main-container">
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

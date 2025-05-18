import { Outlet } from "react-router";
import { LazyHeader } from "../../router/Components/LazyLoader";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="main-container">
      <LazyHeader />
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

import { Link } from "react-router";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <Link to={"/"}>
        <img src="/logo-vinilos.svg" alt="Vinilos" width={150} height={35} />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;

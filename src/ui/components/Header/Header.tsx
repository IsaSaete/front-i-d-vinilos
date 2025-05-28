import { Link } from "react-router";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <Link to={"/"} aria-label="Página principal de vinilos">
        <img
          src="/logo-vinilos.svg"
          alt=""
          width={150}
          height={35}
          aria-hidden="true"
        />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;

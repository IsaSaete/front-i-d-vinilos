import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <img src="/logo-vinilos.svg" alt="Vinilos" width={150} height={35} />
      <Navigation />
    </header>
  );
};

export default Header;

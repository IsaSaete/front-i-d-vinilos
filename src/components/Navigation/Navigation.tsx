import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <NavLink className="navigation__link" to="/">
        Listado
      </NavLink>
    </nav>
  );
};

export default Navigation;

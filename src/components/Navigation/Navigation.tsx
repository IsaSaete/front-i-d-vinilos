import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/vinilos">
        Listado
      </NavLink>
      <NavLink className="navigation__link" to="/añadir-vinilo">
        Añadir
      </NavLink>
    </nav>
  );
};

export default Navigation;

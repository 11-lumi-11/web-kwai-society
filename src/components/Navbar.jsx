import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" end className="navbar__brand">
        La Sociedad Kwai
      </NavLink>
      <div className="navbar__right">
        <nav className="navbar__links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/actividades">Actividades</NavLink>
          <NavLink to="/integrantes">Integrantes</NavLink>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

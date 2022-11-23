import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";

import "./header.css";

const Header = (props) => {
  const [mostrarNavMobile, setMostrarNavMobile] = useState(false);

  const mostrarNavBar = () => {
    setMostrarNavMobile(!mostrarNavMobile);
  };

  return (
    <header>
      <h2>
        <Link to={props.routes[0]} className="restaurant">
          Restaurante Italiano <MdRestaurant />
        </Link>
      </h2>
      <nav className={mostrarNavMobile ? "responsive_nav" : null}>
        <Link to={props.routes[0]} onClick={mostrarNavBar}>
          Home
        </Link>
        <Link to={props.routes[1]} onClick={mostrarNavBar}>
          Menú
        </Link>
        <Link to={props.routes[2]} onClick={mostrarNavBar}>
          Reservas
        </Link>
        <Link to={props.routes[3]} onClick={mostrarNavBar}>
          Contácto
        </Link>
        <button className="nav-btn nav-close-btn" onClick={mostrarNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={mostrarNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export { Header };

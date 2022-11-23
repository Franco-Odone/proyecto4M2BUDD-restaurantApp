import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";

import "./header.css";

const Header = () => {
  const [mostrarNavMobile, setMostrarNavMobile] = useState(false);

  const mostrarNavBar = () => {
    setMostrarNavMobile(!mostrarNavMobile);
  };

  return (
    <header>
      <h2>
        <Link to={"/"} className="restaurant">
          Restaurante Italiano <MdRestaurant />
        </Link>
      </h2>
      <nav className={mostrarNavMobile ? "responsive_nav" : null}>
        <Link to={"/"} onClick={mostrarNavBar}>
          Home
        </Link>
        <Link to={"/menu"} onClick={mostrarNavBar}>
          Menú
        </Link>
        <Link to={"/reservas"} onClick={mostrarNavBar}>
          Reservas
        </Link>
        <Link to={"/contacto"} onClick={mostrarNavBar}>
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

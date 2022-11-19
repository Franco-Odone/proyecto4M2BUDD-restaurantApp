import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "../style/style.css";

const Header = () => {
  const navRef = useRef();

  const mostrarNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h2>
        <Link to={"/"} className="restaurant">
          Restaurant <i className="fa-solid fa-utensils"></i>
        </Link>
      </h2>
      <nav ref={navRef}>
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

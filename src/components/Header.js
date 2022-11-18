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
      <h2>Restaurant <i className="fa-solid fa-utensils"></i></h2>
      <nav ref={navRef}>
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"}>Menú</Link>
        <Link to={"/reservas"}>Reservas</Link>
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

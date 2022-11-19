import "../style/style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__div" id="footer">
        <div className="footer__div-div">
          <h3>Horarios de atención</h3>
          <ul>
            <li>Martes a Viernes</li>
            <li>13:00 a 20:00 hrs</li>
            <li>Sábados y Domingos</li>
            <li>12:00 a 21:00 hrs</li>
          </ul>
        </div>
        <div className="footer__div-div">
          <h3>Síguenos</h3>
          <div className="redes">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

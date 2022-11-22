import { Route, Routes } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { Home } from "../views/Home/Home";
import { Menu } from "../views/Menú/Menu";
import { Reservas } from "../views/Reservas/Reservas";
import { Contacto } from "../views/Contácto/Contacto";
import { Footer } from "../components/Footer/Footer";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

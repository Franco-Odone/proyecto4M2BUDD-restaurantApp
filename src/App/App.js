import { Route, Routes } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { Home } from "../views/Home/Home";
import { Menu } from "../views/Menú/Menu";
import { Reservas } from "../views/Reservas/Reservas";
import { Contacto } from "../views/Contácto/Contacto";
import { Footer } from "../components/Footer/Footer";
import "./app.css";

const routes = ["/", "/menu", "/reservas", "/contacto"];

function App() {
  return (
    <div className="app">
      <Header routes={routes} />
      <Routes>
        <Route path={routes[0]} element={<Home />} />
        <Route path={routes[1]} element={<Menu />} />
        <Route path={routes[2]} element={<Reservas />} />
        <Route path={routes[3]} element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Menu } from "./views/Menu";
import { Reservas } from "./views/Reservas";
import "./style/style.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

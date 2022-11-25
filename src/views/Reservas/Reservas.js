import "./reservas.css";
import { FormularioReservas } from "./FormularioReservas/FormularioReservas";

const Reservas = () => {
  return (
    <div className="reservas">
      <h2>Reservas</h2>
      <p>Por favor, complete todos los campos a continuación para poder hacer la reserva.</p>
      <FormularioReservas />
    </div>
  );
};

export { Reservas };

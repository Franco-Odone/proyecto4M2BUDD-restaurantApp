import "./reservas.css";
import { FormularioReservas } from "./FormularioReservas/FormularioReservas";

const Reservas = () => {
  return (
    <div className="reservas">
      <div className="divReservas">
        <h2 className="h2Reservas">Reservas</h2>
        <p className="pReservas">
          Por favor, complete todos los campos a continuación para poder hacer
          la reserva.
        </p>
      </div>
      <FormularioReservas />
    </div>
  );
};

export { Reservas };

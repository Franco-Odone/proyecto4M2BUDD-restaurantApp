import "./contacto.css";
import { FormularioContacto } from "./FormularioContacto/FormularioContacto";

const Contacto = () => {
  return (
    <div className="contacto">
      <h2>Contácto</h2>
      <p>Por favor, complete todos los campos a continuación para poder contactarse con nosotros.</p>
      <FormularioContacto />
    </div>
  );
};

export { Contacto };

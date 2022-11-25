import "./contacto.css";
import { FormularioContacto } from "./FormularioContacto/FormularioContacto";

const Contacto = () => {
  return (
    <div className="contacto">
      <div className="divContacto">
        <h2 className="h2Contacto">Contácto</h2>
        <p className="pContacto">
          Por favor, complete todos los campos a continuación para poder
          contactarse con nosotros.
        </p>
      </div>
      <FormularioContacto />
    </div>
  );
};

export { Contacto };

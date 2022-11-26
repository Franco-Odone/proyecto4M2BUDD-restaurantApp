import { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../Config/firestore";
import Swal from "sweetalert2";
import "./formulario-reservas.css";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = true;
  }

  if (!values.surname) {
    errors.surname = true;
  }

  if (!values.attendees) {
    errors.attendees = true;
  }

  if (!values.date) {
    errors.date = true;
  }

  if (!values.time) {
    errors.time = true;
  }

  if (!values.cel) {
    errors.cel = true;
  }

  return errors;
};

const FormularioReservas = () => {
  const buttonRef = useRef();
  const navigate = useNavigate();
  const [fireStoreData, setFireStoreData] = useState({});

  useEffect(() => {
    let validation = validate(fireStoreData);
    if (Object.keys(validation).length === 0) {
      buttonRef.current.removeAttribute("disabled");
    } else if (Object.keys(validation).length !== 0) {
      buttonRef.current.setAttribute("disabled", "disabled");
    }
  }, [fireStoreData]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(fireStoreData);
      const docRef = await addDoc(collection(db, "Reservas"), fireStoreData);
      console.log("Reserva creada, el ID del documento es: ", docRef.id);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Estimado/a ${fireStoreData.name}, su reserva ha sido realizada con éxito`,
        showConfirmButton: true,
        timer: 4000,
      });
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    setFireStoreData((prevFireStoreData) => {
      return {
        ...prevFireStoreData,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formReservas">
      <div className="inputDivReservas">
        <label className="labelReservas" htmlFor="name">
          Nombre
        </label>
        <input
          type={"text"}
          id="name"
          name="name"
          className="inputReservas"
          onChange={handleChange}
        />
      </div>

      <div className="inputDivReservas">
        <label className="labelReservas" htmlFor="surname">
          Apellido
        </label>
        <input
          type={"text"}
          id="surname"
          name="surname"
          className="inputReservas"
          onChange={handleChange}
        />
      </div>

      <div className="inputDivReservas">
        <label className="labelReservas" htmlFor="attendees">
          Asistentes
        </label>
        <input
          type={"number"}
          id="attendees"
          name="attendees"
          className="inputReservas"
          onChange={handleChange}
        />
      </div>

      <div className="inputDivReservas">
        <label className="labelReservas" htmlFor="date">
          Fecha
        </label>
        <input
          type={"date"}
          id="date"
          name="date"
          className="inputReservas"
          onChange={handleChange}
        />
      </div>

      <div className="inputDivReservas">
        <label className="labelReservas" htmlFor="time">
          Hora
        </label>
        <input
          type={"time"}
          id="time"
          name="time"
          className="inputReservas"
          onChange={handleChange}
        />
      </div>

      <div className="inputDivReservas">
        <label className="labelReservas" htmlFor="cel">
          Celular
        </label>
        <input
          type={"tel"}
          id="cel"
          name="cel"
          className="inputReservas"
          onChange={handleChange}
        />
      </div>

      <div className="inputDivButtonReservas">
        <button
          type="submit"
          ref={buttonRef}
          className="buttonReservas"
          disabled
        >
          Reservar
        </button>
      </div>
    </form>
  );
};

export { FormularioReservas };

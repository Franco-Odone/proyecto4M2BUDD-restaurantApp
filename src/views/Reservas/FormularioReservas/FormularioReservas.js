import { useEffect, useState, useRef } from "react";

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
  const formRef = useRef();
  const buttonRef = useRef();
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
      console.log(fireStoreData);
      await addDoc(collection(db, "Reservas"), fireStoreData);
      console.log("Reserva creada");
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Estimado/a ${fireStoreData.name}, su reserva ha sido realizada con éxito`,
        showConfirmButton: true,
        timer: 4000,
      });
      formRef.current.reset();
      buttonRef.current.setAttribute("disabled", "disabled");
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
    <form onSubmit={handleSubmit} ref={formRef} className="form">
      <div className="inputDiv">
        <label className="label" htmlFor="name">
          Nombre
        </label>
        <input
          type={"text"}
          id="name"
          name="name"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label className="label" htmlFor="surname">
          Apellido
        </label>
        <input
          type={"text"}
          id="surname"
          name="surname"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label className="label" htmlFor="attendees">
          Asistentes
        </label>
        <input
          type={"number"}
          id="attendees"
          name="attendees"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label className="label" htmlFor="date">
          Fecha
        </label>
        <input
          type={"date"}
          id="date"
          name="date"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label className="label" htmlFor="time">
          Hora
        </label>
        <input
          type={"time"}
          id="time"
          name="time"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label className="label" htmlFor="cel">
          Celular
        </label>
        <input
          type={"tel"}
          id="cel"
          name="cel"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDivButton">
        <button type="submit" ref={buttonRef} disabled>
          Reservar
        </button>
      </div>
    </form>
  );
};

export { FormularioReservas };

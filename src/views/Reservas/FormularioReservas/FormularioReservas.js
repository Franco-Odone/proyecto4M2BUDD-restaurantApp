import { useEffect, useState, useRef } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../Config/firestore";
import Swal from "sweetalert2";
import "./formulario-reservas.css";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Campo requerido";
  }

  if (!values.surname) {
    errors.surname = "Campo requerido";
  }

  if (!values.attendees) {
    errors.attendees = "Campo requerido";
  }

  if (!values.date) {
    errors.date = "Campo requerido";
  }

  if (!values.time) {
    errors.time = "Campo requerido";
  }

  if (!values.cel) {
    errors.cel = "Campo requerido";
  }

  return errors;
};

const FormularioReservas = () => {
  const formRef = useRef();
  const buttonRef = useRef();
  const [fireStoreData, setFireStoreData] = useState({});

  useEffect(() => {
    let validación = validate(fireStoreData);
    Object.keys(validación);
    // console.log(validación);
    // console.log(Object.keys(validación).length === 6);1
  }, [fireStoreData]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(fireStoreData);
      await addDoc(collection(db, "Reservas"), fireStoreData);
      console.log("Documento creado");
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Estimado/a ${fireStoreData.name}, su reserva ha sido realizada con éxito`,
        showConfirmButton: true,
        timer: 4000,
      });
      formRef.current.reset();
      buttonRef.current.disabled = "true";
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    // console.log(e);
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
        <label className="label">Nombre</label>
        <input
          type={"text"}
          id="name"
          name="name"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label className="label">Apellido</label>
        <input
          type={"text"}
          id="surname"
          name="surname"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label className="label">Asistentes</label>
        <input
          type={"number"}
          id="attendees"
          name="attendees"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label className="label">Fecha</label>
        <input
          type={"date"}
          id="date"
          name="date"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label className="label">Hora</label>
        <input
          type={"time"}
          id="time"
          name="time"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label className="label">Celular</label>
        <input
          type={"tel"}
          id="cel"
          name="cel"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <button type="submit" ref={buttonRef}>
          Reservar
        </button>
      </div>
    </form>
  );
};

export { FormularioReservas };

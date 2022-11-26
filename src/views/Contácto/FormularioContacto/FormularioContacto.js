import { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../Config/firestore";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import "./formulario-contacto.css";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = true;
  }

  if (!values.surname) {
    errors.surname = true;
  }

  if (!values.email) {
    errors.email = true;
  }

  if (!values.contactReason) {
    errors.contactReason = true;
  }

  return errors;
};

const FormularioContacto = () => {
  const buttonRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    // console.log(values);
    try {
      const docRef = await addDoc(collection(db, "Contactos"), values);
      console.log("Documento creado con ID: ", docRef.id);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Estimado/a ${values.name}, su mensaje ha sido enviado con éxito, lo contactaremos a la brevedad`,
        showConfirmButton: true,
        timer: 4000,
      });
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };
  // handleChange modifica el objeto y hadleSubmit manipula el objeto
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      contactReason: "",
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    let validation = validate(formik.values);
    if (Object.keys(validation).length === 0) {
      buttonRef.current.removeAttribute("disabled");
    } else if (Object.keys(validation).length !== 0) {
      buttonRef.current.setAttribute("disabled", "disabled");
    }
  }, [formik.values]);

  return (
    <form onSubmit={formik.handleSubmit} className="formContactos">
      <div className="inputDivContactos">
        <label htmlFor="name" className="labelContactos">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="inputContactos"
          onChange={formik.handleChange}
        ></input>
      </div>

      <div className="inputDivContactos">
        <label htmlFor="surname" className="labelContactos">
          Apellido
        </label>
        <input
          id="surname"
          name="surname"
          type="text"
          className="inputContactos"
          onChange={formik.handleChange}
        ></input>
      </div>

      <div className="inputDivContactos">
        <label htmlFor="email" className="labelContactos">
          Correo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="inputContactos"
          onChange={formik.handleChange}
        ></input>
      </div>

      <div className="inputDivContactos">
        <label htmlFor="contactReason" className="labelContactos">
          Motivo
        </label>
        <textarea
          id="contactReason"
          name="contactReason"
          className="textAreaContactos"
          onChange={formik.handleChange}
        ></textarea>
      </div>

      <div className="inputDivButtonReservas">
        <button
          type="submit"
          ref={buttonRef}
          className="buttonContactos"
          disabled
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export { FormularioContacto };

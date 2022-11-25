import { useEffect, useRef } from "react";

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
  const formRef = useRef(),
    buttonRef = useRef();

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await addDoc(collection(db, "Contactos"), values);
      console.log("Documento creado");
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Estimado/a ${values.name}, su mensaje ha sido enviado con éxito, lo contactaremos a la brevedad`,
        showConfirmButton: true,
        timer: 4000,
      });
      formRef.current.reset();
      buttonRef.current.setAttribute("disabled", "disabled");
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
    <form ref={formRef} onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="surname">Apellido</label>
        <input
          id="surname"
          name="surname"
          type="text"
          onChange={formik.handleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="email">Correo</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="contactReason">Motivo</label>
        <textarea
          id="contactReason"
          name="contactReason"
          onChange={formik.handleChange}
        ></textarea>
      </div>

      <div>
        <button type="submit" ref={buttonRef} disabled>
          Enviar
        </button>
      </div>
    </form>
  );
};

export { FormularioContacto };

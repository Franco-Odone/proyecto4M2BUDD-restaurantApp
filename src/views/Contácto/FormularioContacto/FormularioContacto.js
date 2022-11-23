import { useRef } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../Config/firestore";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import "./formulario-contacto.css";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Campo requerido";
  }

  if (!values.surname) {
    errors.surname = "Campo requerido";
  }

  if (!values.email) {
    errors.email = "Campo requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email inválido";
  }

  if (!values.contactReason) {
    errors.contactReason = "Campo requerido";
  }

  return errors;
};

const FormularioContacto = () => {
  const formRef = useRef(),
    buttonRef = useRef();

  const onSubmit = async (values) => {
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
      buttonRef.current.disabled = "true";
    } catch (e) {
      console.error(e);
    }
  };

  // handleSubmit y handleChange son funciones nativas de formika
  // handleChange modifica el objeto y hadleSubmit manipula el objeto
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      contactReason: "",
    },
    validate,
    onSubmit: onSubmit,
  });

  return (
    <form ref={formRef} onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          // onBlur es un evento que sucede cuando se quita el foco de un elemento
          onBlur={formik.handleBlur}
        ></input>
        {/* The “touched” property in Formik is a way to determine if a field has been used (or touched) by the user */}
        {formik.touched.name && formik.errors.name ? (
          <div className="val">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="surname">Apellido</label>
        <input
          id="surname"
          name="surname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.surname && formik.errors.surname ? (
          <div className="val">{formik.errors.surname}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Correo</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <div className="val">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="contactReason">Motivo</label>
        <textarea
          id="contactReason"
          name="contactReason"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.contactReason && formik.errors.contactReason ? (
          <div className="val">{formik.errors.contactReason}</div>
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          ref={buttonRef}
          // esValid es una propiedad cuyo valor es true si el objeto error está vacío
          disabled={!formik.isValid}
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export { FormularioContacto };

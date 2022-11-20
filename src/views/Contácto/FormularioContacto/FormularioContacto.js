import { useFormik } from "formik";
import "./formulario-contacto.css";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Campo requerido";
  } else if (values.name.length > 15) {
    errors.name = "Máximo 15 caracteres";
  }

  if (!values.surname) {
    errors.surname = "Campo requerido";
  } else if (values.surname.length > 20) {
    errors.surname = "Máximo 20 caracteres";
  }

  if (!values.email) {
    errors.email = "Campo requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email inválido";
  }

  if (!values.contactReason) {
    errors.contactReason = "Campo requerido";
  } else if (values.contactReason.length > 30) {
    errors.contactReason = "Máximo 30 caracteres";
  }

  return errors;
};

const FormularioContacto = () => {
  // handleSubmit y handleChange son funciones nativas de formika, y values es una variable de estado de formika
  // handleChange modifica el objeto y hadleSubmit manipula el objeto
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      contactReason: "",
    },
    validate,
    // mas adelante se usa un await con firebase
    onSubmit: async function (values) {
      console.log(values);
      alert("Su mensaje ha sido enviado, lo contactaremos a la brevedad")
      document.getElementById("frm").reset();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} id="frm">
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
      ></input>
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="surname">Apellido</label>
      <input
        id="surname"
        name="surname"
        type="text"
        onChange={formik.handleChange}
      ></input>
      {formik.errors.surname ? <div>{formik.errors.surname}</div> : null}

      <label htmlFor="email">Correo</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
      ></input>
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="contactReason">Motivo</label>
      <textarea
        id="contactReason"
        name="contactReason"
        onChange={formik.handleChange}
      ></textarea>
      {formik.errors.contactReason ? (
        <div>{formik.errors.contactReason}</div>
      ) : null}

      <button type="submit">Enviar</button>
    </form>
  );
};

export { FormularioContacto };

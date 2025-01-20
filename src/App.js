import "./App.css";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Requerido";
      } else if (values.name.length < 5) {
        errors.name = "El nombre es muy corto";
      }

      if (!values.lastname) {
        errors.lastname = "Requerido";
      } else if (values.lastname.length < 5) {
        errors.lastname = "El apellido es muy corto";
      }

      return errors;
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label htmlFor="lastname">Apellido</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      {formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      <br />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;

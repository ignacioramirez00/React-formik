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

      if (!values.email) {
        errors.email = "Requerido";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email no válido";
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
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label htmlFor="lastname">Apellido</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      <br />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;

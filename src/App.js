import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";

function App() {
  // Define la función validate fuera de `return`
  const validate = (values) => {
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
      errors.email = "Email no válido";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Name" />
        <Field name="name" type="text" className="input" />
        <ErrorMessage name="name" />
        <br />
        <label htmlFor="lastname">Apellido</label>
        <Field name="lastname" type="text" />
        <ErrorMessage name="lastname" />
        <br />
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <Checkbox name="accept">
          Aceptar terminos y condiciones
        </Checkbox>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;

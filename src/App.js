import "./App.css";
import { Formik, Form } from "formik";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";
import Select from "./components/Select";
import Radio from "./components/Radio";

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

    if (!values.radio) {
      errors.radio = "Requerido";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        radio: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <TextInput name="lastname" label="Apellido" />
        <TextInput name="email" label="Email" type="email" />
        <Select label="Tipo de chancho" name="chancho">
          <option value="">Seleccione chancho</option>
          <option value="felipe">Felipe</option>
          <option value="jorge">Jorge</option>
        </Select>
        <Checkbox name="accept">Aceptar términos y condiciones</Checkbox>
        <Radio name="radio" value="prueba 1" label="Prueba 1">
          Prueba 1
        </Radio>
        <Radio name="radio" value="prueba 2" label="Prueba 2">
          Prueba 2
        </Radio>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;

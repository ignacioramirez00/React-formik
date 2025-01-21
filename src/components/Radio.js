import { Field } from "formik";

function Radio({ name, value, label }) {
  return (
    <div>
      <label>
        <Field type="radio" name={name} value={value} />
        {label}
      </label>
    </div>
  );
}

export default Radio;

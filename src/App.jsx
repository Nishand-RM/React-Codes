import { useFormik } from "formik";
import { useRef, useState } from "react";

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if(!values.email) {
    errors.email = 'Email is required';
  }

  return errors;
}

// Handling form without formik library
const App = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    }
  });

  const ref = useRef(null);

  return (
    <div>
      <h1>Subscribe to our newsletter</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" 
              value={formik.values.name}
              onChange={formik.handleChange}
              ref={ref}
            />
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" 
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </label>
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default App;
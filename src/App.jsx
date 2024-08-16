import { useFormik } from "formik";
import { useRef, useState } from "react";

// Handling form without formik library
const App = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  const ref = useRef(null);

  return (
    <div>
      <h1>Subscribe to our newsletter</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" 
            value={formik.values.name}
            onChange={formik.handleChange}
            ref={ref}
          />
        </label>
        <label>
          Email:
          <input type="email" name="email" 
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default App;
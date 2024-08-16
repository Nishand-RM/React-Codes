import { useRef, useState } from "react";

// Handling form without formik library
const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // will run whenever any state changes

    // reset the values after submit
    setFormData({
      name: '',
      email: ''
    });

    // focus on name input field after submit
    ref.current.focus();
  }

  return (
    <div>
      <h1>Subscribe to our newsletter</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            ref={ref}
          />
        </label>
        <label>
          Email:
          <input type="email" name="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default App;
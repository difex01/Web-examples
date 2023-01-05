import { ChangeEvent, useState } from 'react';
import './style.css'

interface signUpI {
  name: string;
  email: string;
  password: string;
}

const Form = () => {

  const [form, setForm] = useState<signUpI>({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="form">
      <h2>Form</h2>
      <form className="d-flex flex-column form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          name="email"
          id="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </form>
      <pre className="m-3">
        {JSON.stringify(form)}
      </pre>
    </div>
  )
}

export default Form
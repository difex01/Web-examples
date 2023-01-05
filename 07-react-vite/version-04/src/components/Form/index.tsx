import { MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import './style.css'

interface signUpI {
  name: string;
  email: string;
  password: string;
}

const Form = () => {

  const {form, handleChange} = useForm<signUpI>({
    name: "",
    email: "",
    password: "",
  })

  const [isReady, setIsReady] = useState<boolean>(false);

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsReady(true)
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
        <button onClick={onSubmit}>Continuar</button>
      </form>
      <pre className="m-3">
        {isReady ? JSON.stringify(form) : ''}
      </pre>
      <hr />
      <NavLink to='/'>Contador</NavLink>
    </div>
  )
}

export default Form
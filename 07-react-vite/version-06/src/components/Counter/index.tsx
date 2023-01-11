import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import ButtonCool from '../ButtonCool';

interface CounterProps {
  title?: string;
}

function Counter(props: CounterProps) {

  const { title } = props;

  const [counter, setCounter] = useState(0)

  const increment = (n: number = 1) => {
    setCounter(counter + n)
  }

  const decrement = (n: number = 1) => {
    setCounter(counter - n)
  }

  return (
    <div className="counter">
      <h2>{title}: {counter}</h2>
      <ButtonCool coolClass='btn btn-success m-2' label="+1" handleClick={() => increment()} />
      <button className='btn btn-success m-2' onClick={() => increment(2)}>+2</button>
      <button className='btn btn-success m-2' onClick={() => increment(10)}>+10</button>
      <ButtonCool coolClass='btn btn-danger m-2' label='-1' handleClick={() => decrement()} />
      <hr />
      <NavLink to='/form'>Formulario</NavLink>
    </div>
  )
}

export default Counter;
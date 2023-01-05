import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

interface CounterProps {
  title?: string;
}

function Counter(props: CounterProps) {

  const { title } = props;

  const [counter, setCounter] = useState(0)

  let abc = 1;

  const increment = (n: number = 1) => {
    //setCounter(counter + n)
    console.log('increment', abc)
    abc += 1;
    console.log('increment>', abc)
  }

  const decrement = (n: number = 1) => {
    setCounter(counter - n)
  }

  return (
    <div className="counter">
      <h2>{title}: {counter}</h2>
      <button className='btn btn-success m-2' onClick={() => increment()}>+1</button>
      <button className='btn btn-success m-2' onClick={() => increment(2)}>+2</button>
      <button className='btn btn-success m-2' onClick={() => increment(10)}>+10</button>
      <button className='btn btn-danger m-2' onClick={() => decrement()}>-1</button>
      <hr />
      <NavLink to='/form'>Formulario</NavLink>
    </div>
  )
}

export default Counter;
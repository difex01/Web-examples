import { useState } from 'react'

function App() {

  const title = 'Counter';

  const [counter, setCounter] = useState(0)

  const increment = (n: number = 1) => {
    setCounter(counter + n)
  }

  const decrement = (n: number = 1) => {
    setCounter(counter - n)
  }

  return (
    <div className="App text-center bg-dark text-light min-vh-100">
      <div className="counter">
      <h2>{title}: {counter}</h2>
      <button className='btn btn-success m-2' onClick={() => increment()}>+1</button>
      <button className='btn btn-success m-2' onClick={() => increment(2)}>+2</button>
      <button className='btn btn-success m-2' onClick={() => increment(10)}>+10</button>
      <button className='btn btn-danger m-2' onClick={() => decrement()}>-1</button>
      </div>
    </div>
  )
}

export default App

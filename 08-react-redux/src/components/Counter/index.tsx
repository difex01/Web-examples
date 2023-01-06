import { useSelector, useDispatch } from 'react-redux';
import { StateI } from '../../store/slices';
import { decrementCounter, incrementCounter } from '../../store/slices/counter/actions';
import { counterState } from '../../store/slices/counter/reducers';

type Props = {
  title?: string
}

function Counter({ title = 'Counter' }: Props) {

  const dispatch = useDispatch();

  const counter = useSelector<StateI>(state => state.counter) as counterState;

  const increment = (n: number) => {
    dispatch(incrementCounter(n));
  }

  const decrement = (n: number) => {
    dispatch(decrementCounter(n));
  }

  return (
    <div>
      <h2>{title}: {counter}</h2>
      <br />
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => decrement(1)}>-1</button>
    </div>
  )
}

export default Counter
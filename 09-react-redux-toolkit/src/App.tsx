import { Provider } from 'react-redux'
import store from './store';
import './App.css'
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {

  return (
    <Provider store={store}>
      <Counter />
      <hr />
      <TodoList />
    </Provider>
  )
}

export default App

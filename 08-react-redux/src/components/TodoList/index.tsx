import { FormEvent, MouseEvent, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { StateI } from "../../store/slices";
import { addTodo, toggleTodo } from "../../store/slices/todo/actions";
import { todoStateI } from "../../store/slices/todo/reducers";
import './style.css';

function TodoList() {

  const dispatch = useDispatch();

  const todos = useSelector<StateI>(state => state.todos) as todoStateI[];

  const [title, setTitle] = useState<string>('')

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setTitle(value);
  }
  
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle('');
  }

  const handleToggle = (idx: number) => {
    dispatch(toggleTodo(idx));
  }

  return (
    <div>
      <h1>ToDo List</h1>

      <h2>Add a new todo</h2>
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" onChange={handleChange} value={title} />
        <button onClick={handleSubmit}>Add todo</button>
      </form>

      <br />

      <div className="todos">
      {todos.map((todo, idx) => (
        <button
          className={todo.completed ? 'completed' : ''}
          onClick={() => handleToggle(idx)}
        >
          {todo.title}
        </button>
      ))}
      </div>

    </div>
  )
}

export default TodoList
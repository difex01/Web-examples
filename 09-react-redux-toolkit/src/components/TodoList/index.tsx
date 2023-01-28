import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { StateI } from "../../store/slices";
import { addTodo, toggleTodo } from "../../store/slices/todos";
import { todosListItemI } from "../../store/slices/todos/reducers";
import './style.css';
import { getTodosData } from "../../store/slices/todos/extraReducers";
import { AppDispatch } from "../../store";

function TodoList() {

  const dispatch = useDispatch<AppDispatch>();

  const todos = useSelector<StateI>(state => state.todos.list) as todosListItemI[];

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

  useEffect(() => {
    dispatch(getTodosData(1));
  }, [])

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
          key={todo.title}
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
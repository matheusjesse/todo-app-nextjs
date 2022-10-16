import { useState, useEffect } from 'react';
import TodoListContainer from './style';

function TodoList({ dayPeriod }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todoList'));
    const newTodo = [];
    data.forEach((item) => item.dayPeriod
      .find((element) => element === dayPeriod && newTodo.push(item)));
    setTodos(newTodo);
  }, []);

  return (
    <TodoListContainer>
      {
          todos && todos.map(({ noteText, id }) => (
            <label htmlFor={`todo-${id}`} key={id}>
              <input
                data-testid="day-of-the-week-id"
                type="checkbox"
                id={`todo-${id}`}
                name={`todo-${id}`}
                value={noteText}
              />
              {noteText}
            </label>
          ))
        }
    </TodoListContainer>
  );
}

export default TodoList;

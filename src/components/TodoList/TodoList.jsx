import { TodoListItem } from './TodoList.styled.js';
export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoListItem key={id}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p>{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Видалити</button>
        </TodoListItem>
      ))}
    </ul>
  );
};

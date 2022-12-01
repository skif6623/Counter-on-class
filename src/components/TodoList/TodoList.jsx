import {TodoListItem} from "./TodoList.styled.js";
export const TodoList = ({todos, onDeleteTodo}) => {
	return (
		<ul>
			{todos.map(({id, text, completed}) => (
				<TodoListItem key={id}>
					<p>{text}</p>
					<button onClick={() => onDeleteTodo(id)}>Видалити</button>
				</TodoListItem>
			))}
		</ul>
	);
};

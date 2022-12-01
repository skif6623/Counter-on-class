import {TodoListItem} from "./TodoList.styled.js";
export const TodoList = ({todos}) => {
	return (
		<ul>
			{todos.map(({id, text, completed}) => (
				<TodoListItem key={id}>
					<p>{text}</p>
					<button>Видалити</button>
				</TodoListItem>
			))}
		</ul>
	);
};

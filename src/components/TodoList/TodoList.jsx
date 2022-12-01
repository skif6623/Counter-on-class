export const TodoList = ({todos}) => {
	return (
		<ul>
			{todos.map(({id, text, completed}) => (
				<li key={id}>
					<p>{text}</p>
				</li>
			))}
		</ul>
	);
};

// import {Counter} from "./components/Counter/Counter";
// import {Dropdown} from "./components/Dropdown/Dropdown";
import React, {Component} from "react";
import {TodoList} from "./components/TodoList/TodoList";
import initTodos from "./todos.json";
// import {ColorPicker} from "./components/ColorPicker/ColorPicker";
// const colorPickerOptions = [
// 	{label: "red", color: "#F44336"},
// 	{label: "green", color: "#4CAF50"},
// 	{label: "blue", color: "#2196F3"},
// 	{label: "grey", color: "#607D8B"},
// 	{label: "pink", color: "#E91E63"},
// 	{label: "indigo", color: "#3F51B5"},
// ];
export class App extends Component {
	state = {
		todos: initTodos,
	};

	deleteTodo = todoId => {
		this.setState(prevState => ({todos: prevState.todos.filter(todo => todo.id !== todoId)}));
	};

	render() {
		const {todos} = this.state;

		return (
			<>
				<h1>Стан компонента</h1>
				<TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
			</>
		);
	}
}

// import {Counter} from "./components/Counter/Counter";
// import {Dropdown} from "./components/Dropdown/Dropdown";
import shortid from 'shortid';
import React, { Component } from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { TodoEditor } from './components/TodoEditor/TodoEditor';
import initTodos from './todos.json';
import { Modal } from './components/Modal/Modal';
import { Clock } from './components/Clock/Clock';
// import { Form } from './components/Form/Form';
// import { ColorPicker } from './components/ColorPicker/ColorPicker';
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
export class App extends Component {
  state = {
    todos: initTodos,
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    console.log();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      }),
    }));
  };

  formSubmitHandler = data => {
    console.log('Дані які приходять з форми', data);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, showModal } = this.state;

    const completeTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          показати годину
        </button>
        {showModal && <Clock />}
        {/* {showModal && (
          <Modal close={this.toggleModal}>
            <h1>Заголовок для модального вікна</h1>
            <p>
              lorems dfjshdfsjd klsdhfjsd fjkhfskd fljhfjoshd f;slj djsfhsjkdhf
              s;df jksdhfjkshdfk asdjhjksdfhkjashdjfh sjkhf sdkljfh sdjkfhsfh
              lorems dfjshdfsjd klsdhfjsd fjkhfskd fljhfjoshd f;slj djsfhsjkdhf
              s;df jksdhfjkshdfk asdjhjksdfhkjashdjfh sjkhf sdkljfh sdjkfhsfh
              lorems dfjshdfsjd klsdhfjsd fjkhfskd fljhfjoshd f;slj djsfhsjkdhf
              s;df jksdhfjkshdfk asdjhjksdfhkjashdjfh sjkhf sdkljfh sdjkfhsfh
              lorems dfjshdfsjd klsdhfjsd fjkhfskd fljhfjoshd f;slj djsfhsjkdhf
              s;df jksdhfjkshdfk asdjhjksdfhkjashdjfh sjkhf sdkljfh sdjkfhsfh
            </p>
            <button type="button" onClick={this.toggleModal}>
              закрити модальне вікно
            </button>
          </Modal>
        )} */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Form submit={this.formSubmitHandler} /> */}
        {/* <TodoEditor onSubmitForm={this.addTodo} />
        <h1>Стан компонента</h1>
        <ul>
          <li>
            <p>Загальна к-сть: {todos.length}</p>
          </li>
          <li>
            <p>Виконані: {completeTodos} </p>
          </li>
        </ul>
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
      </>
    );
  }
}

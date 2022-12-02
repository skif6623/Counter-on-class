import React, { Component } from 'react';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  resetMessage = () => {
    this.setState({
      message: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitForm(this.state.message);

    this.resetMessage();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Зберегти</button>
      </form>
    );
  }
}

import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.submit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  render() {
    const { name, tag } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ім'я
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прізвище
          <input
            type="text"
            name="tag"
            value={tag}
            onChange={this.handleChange}
          />
        </label>
        <button>Відправити</button>
      </form>
    );
  }
}

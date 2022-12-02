import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
    license: false,
  };

  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);

    this.setState({ license: !this.state.license });
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
        <label>
          Приймаю умови користування
          <input
            type="checkbox"
            name="licence"
            checked={this.state.license}
            onChange={this.handleLicenceChange}
          />
        </label>
        <button type="submit" disabled={!this.state.license}>
          Відправити
        </button>
      </form>
    );
  }
}

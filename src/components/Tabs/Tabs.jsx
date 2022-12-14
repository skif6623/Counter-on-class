import React, { Component } from 'react';

export class Tabs extends Component {
  state = {
    activeTabIdx: 0,
  };

  setIdxToState = idx => {
    this.setState({
      activeTabIdx: idx,
    });
  };

  render() {
    const { tabs } = this.props;
    const { activeTabIdx } = this.state;
    const { label, content } = tabs[activeTabIdx];
    return (
      <div>
        {tabs.map(({ label, content }, index) => {
          return (
            <button
              key={label}
              type="button"
              onClick={() => this.setIdxToState(index)}
            >
              {label}
            </button>
          );
        })}
        <h1>{label}</h1>
        <p>{content}</p>
      </div>
    );
  }
}

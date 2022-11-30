import React, {Component} from "react";
import "./Counter.css";
import {Controls} from "./Controls";
import {Value} from "./Value";

export class Counter extends Component {
	state = {
		value: this.props.startedValue,
	};

	handleIncrement = e => {
		this.setState(currState => {
			return {
				value: currState.value + 1,
			};
		});
	};

	handleDecrement = e => {
		this.setState(currState => {
			return {
				value: currState.value - 1,
			};
		});
	};
	render() {
		return (
			<div className="Counter">
				<Value value={this.state.value} />
				<Controls onInc={this.handleIncrement} onDec={this.handleDecrement} />
			</div>
		);
	}
}

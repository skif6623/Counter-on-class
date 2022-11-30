import React, {Component} from "react";
import "./Counter.css";
import {Controls} from "./Controls";

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
				<span className="Counter__value">{this.state.value}</span>
				<Controls onInc={this.handleIncrement} onDec={this.handleDecrement} />
			</div>
		);
	}
}

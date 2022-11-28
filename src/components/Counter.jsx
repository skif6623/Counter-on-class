import React, {Component} from "react";
import "./Counter.css";

export class Сounter extends Component {
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
				<div className="Counter__controls">
					<button type="button" onClick={this.handleIncrement}>
						Збільшити на 1
					</button>
					<button type="button" onClick={this.handleDecrement}>
						Зменшити на 1
					</button>
				</div>
			</div>
		);
	}
}

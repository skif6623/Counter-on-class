import React, {Component} from "react";
import "./Counter.css";

export class Сounter extends Component {
	state = {
		value: 0,
	};

	handleIncrement = e => {
		this.setState({
			value: 10,
		});
	};

	handleDecrement = e => {
		console.log("Зменшили на 1");
		console.log(this);
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

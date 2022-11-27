import React, {Component} from "react";
import "./Counter.css";

export class Сounter extends Component {
	handleIncrement = e => {
		console.log("Збільшили на 1");

		const target = e.target;

		setTimeout(() => {
			console.log(target);
		}, 1000);
	};

	handleDecrement = e => {
		console.log("Зменшили на 1");
		console.log(this);
	};
	render() {
		return (
			<div className="Counter">
				<span className="Counter__value">0</span>
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

import React, {Component} from "react";
import "./Counter.css";

export class Сounter extends Component {
	render() {
		return (
			<div className="Counter">
				<span className="Counter__value">0</span>
				<div className="Counter__controls">
					<button type="button">Збільшити на 1</button>
					<button type="button">Зменшити на 1</button>
				</div>
			</div>
		);
	}
}

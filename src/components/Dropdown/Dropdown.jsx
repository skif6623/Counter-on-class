import React, {Component} from "react";
import "./Dropdown.css";

export class Dropdown extends Component {
	state = {
		visible: false,
	};

	render() {
		return (
			<div className="Dropdown">
				<button type="button" className="Dropdown__toggle">
					Показати
				</button>
				<button type="button" className="Dropdown__toggle">
					Заховати
				</button>

				<div className="Dropdown__menu">Випадаюче меню</div>
			</div>
		);
	}
}

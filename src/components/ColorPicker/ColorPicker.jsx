import React, {Component} from "react";
import "./ColorPicker.css";

export class ColorPicker extends Component {
	state = {
		activeOptionIdx: 4,
	};

	makeOptionClassName = index => {
		const optionClasses = ["ColorPicker__option"];

		if (index === this.state.activeOptionIdx) {
			optionClasses.push("ColorPicker__option--active");
		}

		return optionClasses.join(" ");
	};

	setActiveIdx = index => {
		this.setState({activeOptionIdx: index});
	};

	render() {
		const {options} = this.props;
		const {activeOptionIdx} = this.state;
		const {label} = options[activeOptionIdx];

		return (
			<div className="ColorPicker">
				<h2 className="ColorPicker__title">Color Picker</h2>
				<p>Вибраний колір: {label}</p>
				<div>
					{this.props.options.map(({label, color}, index) => {
						const optionsClasName = this.makeOptionClassName(index);

						return (
							<button
								key={label}
								className={optionsClasName}
								style={{
									backgroundColor: color,
								}}
								onClick={() => this.setActiveIdx(index)}
							></button>
						);
					})}
				</div>
			</div>
		);
	}
}

import {Button} from "./Button";

export function Controls({onInc, onDec}) {
	return (
		<div className="Counter__controls">
			<Button action={onDec}>Зменшити на 1</Button>
			<Button action={onInc}>Збільшити на 1</Button>
		</div>
	);
}

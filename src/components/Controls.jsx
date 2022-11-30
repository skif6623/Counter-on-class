export function Controls({onInc, onDec}) {
	return (
		<div className="Counter__controls">
			<button type="button" onClick={onInc}>
				Збільшити на 1
			</button>
			<button type="button" onClick={onDec}>
				Зменшити на 1
			</button>
		</div>
	);
}

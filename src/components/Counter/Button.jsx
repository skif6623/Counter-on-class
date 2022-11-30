export function Button({children, action}) {
	return (
		<button type="button" onClick={action}>
			{children}
		</button>
	);
}

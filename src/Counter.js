function Counter(props) {
	// console.log(props.id)
	return (
		<div className="counter">
			<b>{props.value}</b>
			<div className="counter-controls">
				<button
					className="button is-danger is-small"
					onClick={() => props.onChange(props.value - 1)}>
					-
				</button>
				<button
					className="button is-success is-small"
					onClick={() => props.onChange(props.value + 1)}>
					+
				</button>
			</div>
		</div>
	)
}

export default Counter

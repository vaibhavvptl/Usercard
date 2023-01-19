import "./App.css"

function Counter(props) {
	// console.log(props.id)

	let counterValue = props.value
	return (
		<div className="counter">
			<b>{props.value}</b>
			<div className="counter-controls">
				{/* //if counteraValue is greterthan or equal to 1 then and then only show
				the decrement button else disbale the button */}
				{counterValue >= 1 ? (
					<button
						className="button"
						onClick={() => {
							// console.log(counterValue)
							props.onChange({ value: counterValue - 1, id: props.id })
						}}>
						-
					</button>
				) : (
					<button className="button" disabled>
						-
					</button>
				)}
				<button
					className="button"
					onClick={() =>
						props.onChange({ value: counterValue + 1, id: props.id })
					}>
					+
				</button>
			</div>
		</div>
	)
}

export default Counter

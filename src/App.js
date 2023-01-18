import { useState } from "react"
// import "./App.css"
import Counter from "./Counter"
import Total from "./Total"

function App() {
	const [data, setData] = useState([
		{ id: 1, value: 0 },
		{ id: 2, value: 0 },
		{ id: 3, value: 0 },
		{ id: 4, value: 0 },
	])

	let total = 0
	return (
		<div>
			{data.map((counter) => {
				//calculating total
				total += counter.value

				//decrement function
				const onDecrement = (value) => {
					setData(
						data.map((i) =>
							i.id === counter.id ? { ...i, value: value - 1 } : i
						)
					)
				}

				//increament funtion
				const onIncrement = (value) => {
					setData(
						data.map((i) =>
							i.id === counter.id ? { ...i, value: value + 1 } : i
						)
					)
				}
				const onChange = (value) => {
					// let newData = [...data]
					// newData[id - 1].value = value
					setData(data.map((i) => (i.id === counter.id ? { ...i, value } : i)))
				}
				//returnning counter component to map function
				return (
					<Counter key={counter.id} value={counter.value} onChange={onChange} />
				)
			})}

			{/* total component for total sum of counters */}
			<Total value={total} />
		</div>
	)
}
export default App

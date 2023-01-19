import { useEffect, useState } from "react"
// import "./App.css"
import Counter from "./Counter"
import Total from "./Total"

function App() {
	const [counterData, setCounterData] = useState([])

	//storing data in session to keep data
	useEffect(() => {
		//if data avalibale
		const sessionCounterData = sessionStorage.getItem("counterData")
		//if counter data present then set that data to counter
		if (sessionCounterData) setCounterData(JSON.parse(sessionCounterData))
		//if not counter data present then set the data to staring values
		else {
			setCounterData([
				{ id: 1, value: 0 },
				{ id: 2, value: 0 },
				{ id: 3, value: 0 },
				{ id: 4, value: 0 },
			])
		}
	}, [])

	const onIncrement = ({ value, id }) => {
		setCounterData(
			counterData.map((i) => (i.id === id ? { ...i, value: value + 1 } : i))
		)
	}
	const onDecrement = ({ value, id }) => {
		setCounterData(
			counterData.map((i) => (i.id === id ? { ...i, value: value - 1 } : i))
		)
	}

	const onChange = ({ value, id }) => {
		setCounterData(counterData.map((i) => (i.id === id ? { ...i, value } : i)))
		// storing data to session
		sessionStorage.setItem("counterData", JSON.stringify(counterData))
	}

	let total = 0
	return (
		<div className="app">
			{counterData.map((counter) => {
				//calculating total
				total += counter.value

				return (
					<Counter
						key={counter.id}
						value={counter.value}
						onChange={onChange}
						id={counter.id}
					/>
				)
			})}

			{/* total component for total sum of counters value */}
			<Total value={total} />
		</div>
	)
}
export default App

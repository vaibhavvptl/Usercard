import data from "./userData.json"
import UserInfo from "./UserInfo"

function App() {
	return (
		<div className="flex flex-col items-center  ">
			{data.map((u) => (
				<UserInfo user={u} />
			))}
		</div>
	)
}

export default App

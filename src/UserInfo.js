import SingleInfo from "./SingleInfo"

const UserInfo = (props) => {
	return (
		<div className="flex flex-col bg-blue-500 mx-20 my-10 w-1/2  shadow-[15px_15px_rgba(115,113,114,0.8)]	 p-10 text-white">
			<SingleInfo label="Name : " data={props.user.name} />
			<SingleInfo label="Email : " data={props.user.email} />
			<SingleInfo label="Company : " data={props.user.company} />
			<SingleInfo label="About : " data={props.user.about} />
		</div>
	)
}

export default UserInfo

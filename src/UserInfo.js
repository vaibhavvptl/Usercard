import React from "react"

const UserInfo = (props) => {
	return (
		<div className="flex flex-col bg-blue-500 mx-20 my-10 w-1/2  shadow-[15px_15px_rgba(115,113,114,0.8)]	 p-10 text-white">
			<div className="my-2">
				<span className=" mt-10 font-bold ">Name : </span>
				<span>{props.user.name} </span>
			</div>
			<div className="my-2">
				<span className=" mt-3 font-bold">Comapany : </span>
				<span>{props.user.company}</span>
			</div>
			<div className="my-2">
				<span className=" mt-3 font-bold">Email : </span>
				<span>{props.user.email}</span>
			</div>
			<div className="my-2">
				<span className=" font-bold ">More Info :</span>
				<span className=" ">{props.user.about}</span>
			</div>
		</div>
	)
}

export default UserInfo

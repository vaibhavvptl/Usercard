const SingleInfo = (props) => {
	return (
		<div className="m-2  ">
			<strong>{props.label} </strong>
			<span>{props.data}</span>
		</div>
	)
}

export default SingleInfo

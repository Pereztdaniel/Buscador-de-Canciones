import React from 'react';
import { BiErrorAlt } from 'react-icons/bi'

const Message = ({msg, bgColor}) => {

	let styles = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "space-around",
		alignItems: "center",
		padding: "1rem",
		margin: "2rem 0",
		textAlign: "center",
		color: "#fff",
		fontWeight: "bold",
		backgroundColor: bgColor
	}
	return (
		<div style={styles}>
			<BiErrorAlt />
			<p>{msg}</p>
		</div>
	)
}

export default Message
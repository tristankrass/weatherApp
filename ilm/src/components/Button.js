import React from "react";

const Button = ({newCity}) => {
	return (
		<button onClick={newCity} className="btn" >
			Find a new location
		</button>
	)
};

export default Button;
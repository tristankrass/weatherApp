import React from "react";

const Button = ({newCity}) => {
	return (
		<button onClick={newCity} className="btn" >
			Find new location
		</button>
	)
};

export default Button;
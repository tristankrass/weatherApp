import React from "react";

const Button = ({newCity, longEnough}) => {
	return (
		<button disabled={longEnough} onClick={newCity} className="btn" >
			Find new location
		</button>
	)
};

export default Button;
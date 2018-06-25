import React from "react";

const Button = ({newCity, longEnough}) => {
	return (
		<button disabled={longEnough} onClick={newCity} className="btn btn__search" >
			Search
		</button>
	)
};

export default Button;
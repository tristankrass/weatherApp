import React from "react";

const Button = ( { click, text } ) => {
	return <button onClick={click} className="btn-lg btn-outline-primary">
		{text}
	</button>;
};

export default Button;
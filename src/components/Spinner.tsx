import React, { FunctionComponent } from "react";

const Spinner:FunctionComponent = () => {
	return (
		<div className="lds-ripple">
			<div></div>
			<div></div>
		</div>
	);
};

export default Spinner;
import React, { FunctionComponent } from "react";

type ButtonProps = {
	click: any,
	text: string
}
export const Button:FunctionComponent<ButtonProps> = ( { click, text } ) => (
	
	<button onClick={click} className="btn-lg btn-outline-primary">
			{text}
		</button>
);
	



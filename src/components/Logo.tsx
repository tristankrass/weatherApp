import React, { FunctionComponent } from "react";
import logo from "../assets/images/logo.svg";


const Logo: FunctionComponent = () => {
	return (
		<div className="logo">
			<img className="logo__img" src={logo} alt="Logo" />
			<h2 className="heading heading__tertiary">WeatherApp</h2>
		</div>
	)
};

export default Logo;
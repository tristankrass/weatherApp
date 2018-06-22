import React from "react";



const DailyWeatherForecast = (props) => {

	return(
		<div className="Card">
			{ props.children }
		</div>
	);
};

export default DailyWeatherForecast;

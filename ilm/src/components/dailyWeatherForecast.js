import React from "react";



const DailyWeatherForecast = ({ temperature, date, description }) => {

	return(
		<div className="DailyWeatherCard">
			<h1 className="heading heading__primary">
				{ temperature } °C
			</h1>
			<p>
				{ date }
			</p>
			<h3 className="heading heading__tertiary">
				{ description }
			</h3>
			
		</div>
	);
};

export default DailyWeatherForecast;

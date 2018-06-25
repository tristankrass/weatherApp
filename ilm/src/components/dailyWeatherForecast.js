import React from "react";
import rain from "../assets/images/Raining.png";
import sun from "../assets/images/Sunny.png";
import clouds from "../assets/images/clouds.png";


const DailyWeatherForecast = ({ temperature, date, description }) => {
	
	return(
		<div className="DailyWeatherCard">
			{ description.indexOf("rain") !== -1 ? <img src={rain} style={ {height: "3rem" }} alt="Raining"/>
				: <img src={sun} alt="Sunny" style={ {height: "3rem" }} />
			}
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

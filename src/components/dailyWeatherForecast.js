import React from "react";
import rain from "../assets/images/Raining.png";
import sun from "../assets/images/Sunny.png";
import clouds from "../assets/images/clouds.png";

const DailyWeatherForecast = ({ temperature, date, description, icon }) => {
	let img = <img src={sun} alt="Cloudy" style={ {height: "3rem" }} />;
	if (icon.indexOf("03d") !== -1) {
		 img = <img src={clouds} alt="Cloudy" style={ {height: "3rem" }} />
	}
	if (icon.indexOf("04d") !== -1) {
		 img = <img src={clouds} alt="Cloudy" style={ {height: "3rem" }} />
	}
	if (icon.indexOf("02d") !== -1) {
		 img = <img src={clouds} alt="Cloudy" style={ {height: "3rem" }} />
	}
	if (icon.indexOf("04n") !== -1) {
		 img = <img src={clouds} alt="Cloudy" style={ {height: "3rem" }} />
	}
	if (icon.indexOf("01d") !== -1) {
		 img = <img src={sun} alt="Sunny" style={ {height: "3rem" }} />
	}
	if (icon.indexOf("10d") !== -1) {
		 img = <img src={rain} alt="Rainy" style={ {height: "3rem" }} />
	}
	if (icon.indexOf("10n") !== -1) {
		 img = <img src={rain} alt="Rainy" style={ {height: "3rem" }} />
	}
	return(
		<div className="DailyWeatherCard">
			{ img }
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

import React          from "react";
import rain           from "../assets/images/Raining.png";
import sun            from "../assets/images/Sunny.png";
import clouds         from "../assets/images/clouds.png";



const DailyWeatherForecast = ( { temperature, date, description, icon } ) => {
	let img = <img src={sun} alt="Cloudy" className="card-img-top"/>;
	if ( icon.indexOf( "03d" ) !== - 1 ) {
		img = <img src={clouds} alt="Cloudy" className="card-img-top"/>;
	}
	if ( icon.indexOf( "04d" ) !== - 1 ) {
		img = <img src={clouds} alt="Cloudy" className="card-img-top"/>;
	}
	if ( icon.indexOf( "02d" ) !== - 1 ) {
		img = <img src={clouds} alt="Cloudy" className="card-img-top"/>;
	}
	if ( icon.indexOf( "04n" ) !== - 1 ) {
		img = <img src={clouds} alt="Cloudy" className="card-img-top "/>;
	}
	if ( icon.indexOf( "01d" ) !== - 1 ) {
		img = <img src={sun} alt="Sunny" className="card-img-top "/>;
	}
	if ( icon.indexOf( "10d" ) !== - 1 ) {
		img = <img src={rain} alt="Rainy" className="card-img-top "/>;
	}
	if ( icon.indexOf( "10n" ) !== - 1 ) {
		img = <img src={rain} alt="Rainy" className="card-img-top "/>;
	}
	
	
	
	return (
		<div className="card" style={{ width: "15rem", marginRight: "1rem" +
			"" }}>
	
			{img}
			<div className="card-body">
				<h1 className="card-title">
					{temperature} °C
				</h1>
				<p className="card-text text-info h3">
					{ date }
				</p>
				<h6 className="h6 heading">
					Decription:
				</h6>
				<h3 className="card-text">
					{description}
				</h3>
			</div>
		</div>
	);
};

export default DailyWeatherForecast;

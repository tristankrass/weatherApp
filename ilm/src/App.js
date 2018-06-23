import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/scss/main.css';
import SearchBox from "./components/SearchBox";
import Particles from "react-particles-js";
import weatherImage from "./assets/images/weather.jpg";
import * as urls from "./helpers/Auth";
import DailyWeatherForecast from "./components/dailyWeatherForecast";
import {localCity} from "./helpers/Auth";
import {AUTH} from "./helpers/Auth";
import Button from "./components/Button";



const Today = new Date().getDate();
const Month = new Date().getMonth() + 1;
const Year = new Date().getFullYear();
class App extends Component {
	state = {
		isLoading: false,
		city: "Tallinn",
		currentCity: "Tallinn",
		temperatures: [],
	};
	
	
	handleCallToDatabase = () => {
		const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=${AUTH}`;
		if (this.state.city.length >= 2 ) {
			fetch(BASE_URL)
				.then(value => {
					if (!value.ok) {
						console.log(value.status);
					}
					return value.json()
				})
				.then(data => {
					console.log(data.list.slice(0, 5));
					this.setState({
						temperatures: data.list.slice(0, 5),
						currentCity: data.city.name,
						city: "",
					});
				} )
				.catch(err => {
					console.log(err);
				})
		}
	};
	
	handleInputValue = (e) => {
		this.setState({
			city: e.target.value
		})
	};
	
	componentDidMount() {
		this.handleCallToDatabase();
	};
	
	render() {
		const temperatures = this.state.temperatures.map(temp => {
			return (
				<DailyWeatherForecast
					key={temp.dt}
					temperature={Math.floor(temp.main.temp)}
					date={temp.dt_txt.split(" ")[0]}
					description={temp.weather[0].description}/>
			)
		});
    return (
      <div className="layout">
	      <div className="logo">
		      <img className="logo__img" src={logo} alt="Logo"/>
	      </div>
	      <nav>
		      <h6 style={ { color: "red"}}>Add the city to favourites</h6>
	      </nav>
	      <h1 className="heading heading__primary">
		      Location  { this.state.currentCity }
	      </h1>
	      <div className="searchBar">
		      <SearchBox change={this.handleInputValue} value={this.state.city}/>
		      <Button newCity={ this.handleCallToDatabase } longEnough={this.state.city}/>
	      </div>
	      
	      
	      
	      
	      <h1 className="heading heading__secondary">Weather Forecast for the next 5 days</h1>
	      <section className="cards">
		      { temperatures }
	      </section>
	      
	 
	      
	      
	      
	        <Particles params={{
		        particles: {
			        line_linked: {
				        shadow: {
					        enable: true,
					        color: "var(--dark)",
					        blur: 5
				        }
			        }
		        }
	        }}
           style={{
               width: '100%',
               backgroundImage: `url(${weatherImage})`,
               backgroundPosition: "top",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               opacity: 0.5
               
               
           }}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/scss/main.css';
import SearchBox from "./components/SearchBox";
import Particles from "react-particles-js";
import weatherImage from "./assets/images/weather.jpg";
import DailyWeatherForecast from "./components/dailyWeatherForecast";
import {AUTH} from "./helpers/Auth";
import Button from "./components/Button";
import * as utilities from "./helpers/utilities";
import SaveFavourite from "./components/SaveFavourite";
import FavCity from "./components/FavCity";




class App extends Component {
	state = {
		isLoading: false,
		city: "Tallinn",
		currentCity: "Tallinn",
		dates: [utilities.currentDate, utilities.currentDate1, utilities.currentDate2, utilities.currentDate3, utilities.currentDate4],
		temperatures: [],
		favCities: localStorage.getItem("favCities") || []
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
	
	saveCityHandle = () => {
		const newCity = {
			city: this.state.currentCity.slice(),
			id: 1 + Math.random()
		};
		const listOfCities = [...this.state.favCities];
		listOfCities.push(newCity);
		this.setState({
			favCities: listOfCities
		});
		localStorage.setItem("favCities", JSON.stringify(listOfCities));
	};
	
	componentDidMount() {
		this.handleCallToDatabase();
	};
	
	render() {
		/*console.log(localStorage.setItem(this.state.favCities, this.state.currentCity));
		console.log(this.state.favCities);*/
		const temperatures = this.state.temperatures.map((temp, idx) => {
			return (
				<DailyWeatherForecast
					key={temp.dt}
					temperature={Math.floor(temp.main.temp)}
					date={this.state.dates[idx] }
					description={temp.weather[0].description}/>
			)
		});
	
		
    return (
    	
      <div className="layout">
	      <div className="logo">
		      <img className="logo__img" src={logo} alt="Logo"/>
	      </div>
	      <FavCity cities={ this.state.favCities }/>
	      
	      <button onClick={ this.saveCityHandle } className="btn"> Add city favourite</button>
	      <h1 className="heading heading__primary">
		      Location  { this.state.currentCity }
	      </h1>
	      <SaveFavourite/>
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

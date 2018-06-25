import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/scss/main.css';
import {geolocated} from 'react-geolocated';
import {Button, Spinner, DailyWeatherForecast, SearchBox, Map} from "../components";
import {AUTH, BASE_GMAPURL} from "../helpers/Auth";
import * as utilities from "../helpers/utilities";
import CityNotFound from "../components/CityNotFound";
import {FavouriteCities, CurrentLocation} from "./index";

class App extends Component {
	state = {
		lat: null,
		long: null,
		todaysTemp: null,
		todaysDesc: "",
		showCities: false,
		Error: false,
		isLoading: false,
		city: "Tallinn",
		currentCity: "Tallinn",
		cities: [],
		dates: [utilities.currentDate, utilities.currentDate1, utilities.currentDate2, utilities.currentDate3, utilities.currentDate4],
		temperatures: [],
	};
	
	
	
	
	callToDatabaseWithCoords = () => {
		let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}&units=metric&appid=${AUTH}`
		fetch(url)
			.then(res => {
				this.setState({
					isLoading: true
				});
				if (!res.ok) {
					this.setState({
						Error: true,
						city: "",
						isLoading: false
					})
				}
				return res.json()
			})
			.then(data => {
				this.setState({
					currentCity: data.name,
					city: data.name
				});
				this.handleCallToDatabase()
			})
	};
	
	handleCallToDatabase = () => {
		const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=${AUTH}`;
		if (this.state.city.length >= 2 ) {
			fetch(BASE_URL)
				.then(value => {
					this.setState({
						isLoading: true
					});
					if (!value.ok) {
						this.setState({
							Error: true,
							city: "",
							isLoading: false
						})
					}
					return value.json()
				})
				.then(data => {
					console.log(data.city.coord.lat)
					console.log(data.city.coord.lon)
					this.setState({
						lat: data.city.coord.lat,
						long: data.city.coord.lon,
						todaysTemp: null,
						temperatures: data.list.slice(0, 5),
						currentCity: data.city.name,
						city: "",
						Error: false,
						isLoading: false
					});
				} )
				.catch(err => {
					return <CityNotFound errorMessage={err}/>
				})
				.finally(() => {
					this.setState({
						isLoading: false,
					});
				});
		}
	};
	
	showCities = () => {
		this.setState({ showCities: true})
	};
	closeCities = () => {
		this.setState({ showCities: false})
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
		      <h2 className="heading heading__tertiary">WeatherApp</h2>
	      </div>
	      { this.state.isLoading ? <Spinner/> : null }
	     
	      { this.state.todaysTemp }
	      <SearchBox change={this.handleInputValue} value={this.state.city}/>
	
	      { this.state.Error ? <CityNotFound /> : null }
	      <div className="searchBar">
		      <Button newCity={ this.handleCallToDatabase } longEnough={!this.state.city.length} />
		      <CurrentLocation callToDatabaseWithCoords={this.callToDatabaseWithCoords}/>
		      { this.state.showCities ?
			      <button onClick={this.closeCities} className="btn">Close Favourite Cities</button>:
			      <button onClick={ this.showCities} className="btn ">See your favourite Cities</button>
		      }
		      
	      </div>
	      { this.state.showCities ? <FavouriteCities cities={this.state.currentCity} closeCities={this.closeCities} currentCity={this.state.currentCity}/>
		      : null }
			
	     
	      <hr style={ {marginTop: '3rem'}}/>
	      
		      <div>
			      <h1 className="heading heading__primary">Current Location  { this.state.currentCity }</h1>
			      <h1 className="heading heading__secondary">Weather Forecast for the next 5 days in { this.state.currentCity }</h1>
			      <section className="cards">
				      { temperatures }
			      </section>
		
		      </div>
	      <hr/>
	
	      <Map
		      isMarkerShown
		      lat={this.state.lat}
		      lon={this.state.long}
		      googleMapURL={BASE_GMAPURL}
		      loadingElement={<div style={{ height: `100%` }} />}
		      containerElement={<div style={{ height: `400px` }} />}
		      mapElement={<div style={{ height: `100%` }} />}
	      />





      </div>
    );
  }
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false,
	},
	userDecisionTimeout: 5000,
})(App);

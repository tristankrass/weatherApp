import React, { Component }                                   from 'react';
import '../assets/scss/main.css';
import '../assets/scss/boot/bootstrap.css';
import {geolocated}                                           from 'react-geolocated';
import { Spinner, DailyWeatherForecast, SearchBox, Map, Logo} from "../components";
// import {API_KEY_FOR_WEATHER}              from "../config";
import * as utilities                     from "../helpers/utilities";
import CityNotFound                       from "../components/CityNotFound";
import {FavouriteCities, CurrentLocation} from "./index";
import Button                             from "../components/Button";

class App extends Component {
	state = {
		lat: 59.436962,
		long: 24.753574,
		showCities: false,
		Error: false,
		isLoading: false,
		city: "Tallinn",
		currentCity: "Tallinn",
		cities: [],
		icons: [],
		dates: [utilities.dates],
		temperatures: [],
	};
	
	
	
	
	callToDatabaseWithCoords = () => {
		// let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}&units=metric&appid=${API_KEY_FOR_WEATHER}`
		let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY_FOR_WEATHER}`
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
		// const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=${API_KEY_FOR_WEATHER}`;
		const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY_FOR_WEATHER}`;
		if (this.state.city.length >= 2 ) {
			this.setState({
				isLoading: true
			});
			fetch(BASE_URL)
				.then(value => {
					if (!value.ok) {
						throw new Error();
						
					}
					return value.json()
				})
				.then(data => {
					this.setState({
						lat: data.city.coord.lat,
						long: data.city.coord.lon,
						todaysTemp: null,
						icons: data.list.slice(0,5),
						temperatures: data.list.slice(0, 5),
						currentCity: data.city.name,
						city: "",
						Error: false,
					});
				} )
				.catch(() => {
					this.setState({
						Error: true,
						city: "",
					});
				})
				.finally(() => {
					this.setState({
						isLoading: false,
					});
				});
		}
	};
	formSubmitHandler = (e) => {
		e.preventDefault();
		this.handleCallToDatabase();
	}
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
		if ( !this.state.dates ) {
			console.log("Loading")
		}
		
	};
	
	render() {
		const temperatures = this.state.temperatures.map((temp, idx) => {
			return (
				<DailyWeatherForecast
					key={temp.dt}
					icon={temp.weather[0].icon}
					temperature={Math.floor(temp.main.temp)}
					date={this.state.dates[0][idx]}
					description={temp.weather[0].description}/>
			)});
		
    return (
      <div className="container">
	      <Logo/>
	
	      { this.state.Error && <CityNotFound /> }
	      
	      { this.state.isLoading ? <Spinner/> : null }
	      <SearchBox change={this.handleInputValue}
	                 formSubmitHandler={this.formSubmitHandler}
	                 value={this.state.city}
	                 newCity={ this.handleCallToDatabase }
	                 longEnough={!this.state.city.length}/>
	      
	     
	      <div className="searchBar">
		      <CurrentLocation callToDatabaseWithCoords={this.callToDatabaseWithCoords}/>
		      { this.state.showCities ?
			      <Button click={this.closeCities} text="Close Favourite Cities"/>:
			      <Button click={ this.showCities} text="See your favourite Cities"/>
		      }
	      </div>
	      
	      
	      { this.state.showCities && <FavouriteCities
			      cities={this.state.currentCity}
			      closeCities={this.closeCities}
			      currentCity={this.state.currentCity}/>
	      }
			
	     
	      <hr style={ {marginTop: '3rem'}}/>
	      
		      <div>
			      <h1 className="heading heading__primary">Current Location  { this.state.currentCity }</h1>
			      <h1 className="heading heading__secondary">Weather Forecast for the next 5 days in { this.state.currentCity }</h1>
			      <section className="cards jumbotron bg-light border-info">
				      { temperatures }
			      </section>
		      </div>
	      <hr/>
	
	      <Map
		      isMarkerShown
		      lat={this.state.lat}
		      lon={this.state.long}
		      googleMapURL={utilities.BASE_GMAPURL}
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

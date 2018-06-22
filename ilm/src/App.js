import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/scss/main.css';
import SearchBox from "./components/SearchBox";
import Particles from "react-particles-js";
import weatherImage from "./assets/images/weather.jpg";
import * as fetch from "./helpers/utilities";
import * as urls from "./helpers/Auth";
import DailyWeatherForecast from "./components/dailyWeatherForecast";

const Today = new Date().getDate();
const Month = new Date().getMonth() + 1;
const Year = new Date().getFullYear();
class App extends Component {
	state = {
		isLoading: false,
		userInput: "",
		city: "",
		temperatures: [],
		temperatureDay1: null,
		temperatureDay2: null,
		temperatureDa3: null,
		temperatureDay4: null,
		temperatureDay5: null
	};
	

	handleCallToDatabase() {
		fetch.makeCallToDatabase(urls.BASE_URL)
			.then(jsonData => {
				let temperatureDay1 = Math.floor(jsonData.list[0].main.temp);
				let temperatureDay2 = Math.floor(jsonData.list[1].main.temp);
				let temperatureDay3 = Math.floor(jsonData.list[2].main.temp);
				let temperatureDay4 = Math.floor(jsonData.list[3].main.temp);
				let temperatureDay5 = Math.floor(jsonData.list[4].main.temp);
				this.setState({
					temperatures: temperatureDay1,
					temperatureDay2,
					temperatureDay3,
					temperatureDay4,
					temperatureDay5
				});
				console.log(this.state.temperatues);
				this.setState({
					temperatureDay1,
					temperatureDay2,
					temperatureDay3,
					temperatureDay4,
					temperatureDay5
				});
				this.setState({city: jsonData.city.name});
			})
	}
	
	
	componentDidMount() {
		this.handleCallToDatabase();
	};
	
	render() {
		console.log(new Date().getDate());
		const { temperatureDay1, temperatureDay2, temperatureDay3, temperatureDay4, temperatureDay5} = this.state;
    return (
      <div className="App" >
	      <div className="logo">
		      <img className="logo__img" src={logo} alt="Logo"/>
	      </div>
	      
	      <SearchBox inputChange={this.inputChangeHandler } value={this.state.userInput} onSubmit={this.state.city}/>
	      <h1 className="heading heading__primary">
		      Location  { this.state.city }
	      </h1>
	      <section className="cards">
		      <DailyWeatherForecast>[{ Today }, { Month }, { Year }]<h1 className="heading__primary heading">Today</h1> <h1 className="heading">{ temperatureDay1 }° C</h1></DailyWeatherForecast >
		      <DailyWeatherForecast>[{ Today +1 }, { Month }, { Year }] { temperatureDay2 }° C</DailyWeatherForecast >
		      <DailyWeatherForecast>[{ Today +2 }, { Month }, { Year }] { temperatureDay3 }° C</DailyWeatherForecast >
		      <DailyWeatherForecast>[{ Today + 3}, { Month }, { Year }] { temperatureDay4 }° C</DailyWeatherForecast >
		      <DailyWeatherForecast>[{ Today + 4 }, { Month }, { Year }] { temperatureDay5 }° C</DailyWeatherForecast >
	      </section>
	      
	      <h2>
		     Today { temperatureDay1 } ° C
	      </h2>
	        <div>
		        Tomorrow { temperatureDay2 }  <span>{ new Date().getDate() + 1}</span>
	        </div>
	      <h2>
		      Hello  { temperatureDay3 } ° C
	      </h2>
	      <h3>
		      <span>{ new Date().getDate() + 4}.{ new Date().getMonth() + 1}.{new Date().getFullYear() }</span> { temperatureDay4 } ° C
	      </h3>
	      <h4>
		      <span>{ new Date().getDate() +4 }</span> { temperatureDay5 } ° C
	      </h4>
            <button onClick={ this.makeCallToDatabase }>
	            Make Call constructor Database
            </button>
	 
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

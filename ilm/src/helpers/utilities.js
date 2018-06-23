import * as urls from "./Auth";

export const makeCallToDatabase = (API) => {
	
	return	fetch(urls.BASE_URL)
			.then(response => response.json())
			.then(jsonData => {
				let temperatureDay1 = Math.floor(jsonData.list[0].main.temp);
				let temperatureDay2 = Math.floor(jsonData.list[1].main.temp);
				let temperatureDay3 = Math.floor(jsonData.list[2].main.temp);
				let temperatureDay4 = Math.floor(jsonData.list[3].main.temp);
				let temperatureDay5 = Math.floor(jsonData.list[4].main.temp);
				console.log(temperatureDay1);
				this.setState({
					temperatureDay1,
					temperatureDay2,
					temperatureDay3,
					temperatureDay4,
					temperatureDay5,
					city: jsonData.city.name
				});
			})
			.catch(error => {
				console.log(error);
			})
	}
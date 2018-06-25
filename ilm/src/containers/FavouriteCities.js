import React, { Component } from "react";
import star from "../assets/images/Star.svg";


class FavouriteCities extends Component {
	state = {
		newCity: this.props.cities,
		cities: []
	};
	
	componentDidMount() {
		this.hydrateStateWithLocalStorage();
	}
	addCity = () => {
		const newCity = {
			id: 1 + Math.random(),
			value: this.props.cities.slice()
		};
		
		const cities = [...this.state.cities];
		let cityValues = cities.map(name => name.value);
		
		if ( cityValues.indexOf(newCity.value) === -1) {
			cities.push(newCity);
		} else {
			console.log("Error")
		}
		
		this.setState({
			cities
		});

	
		localStorage.setItem("cities", JSON.stringify(cities));
		
	};
	deleteCity = (id) => {
		let cities = [...this.state.cities];
		const updatedCities = cities.filter(city =>
			city.id !== id
		);
		this.setState({
			cities: updatedCities
		});
		localStorage.setItem("cities", JSON.stringify(updatedCities));
	};
	
	hydrateStateWithLocalStorage() {
		for (let key in this.state) {
			if (localStorage.hasOwnProperty(key)) {
				let value = localStorage.getItem(key);
				try {
					value = JSON.parse(value);
					this.setState({ [key]: value });
				} catch (e) {
					this.setState({ [key]: value });
				}
			}
		}
	}
	
	
	render() {
		return (
			<React.Fragment>
				<hr/>
				<div className="saveFavourite">
					<ul className="saveFavourite__ul">
						<img className="saveFavourite__star" src={star} alt="Add It to your favourite cities"/>
						
						{this.state.cities.map(city => {
							return (
								<li key={city.id} className="saveFavourite__li">
									{city.value}
									<button
										className="btn btn__remove"
										onClick={() => this.deleteCity(city.id)}>
										Remove
									</button>
								</li>
							);
						})}
						<button
							onClick={() => this.addCity()}
							className="btn btn_addFavourite">
							Add { this.props.currentCity} to favourites
						</button>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default FavouriteCities;
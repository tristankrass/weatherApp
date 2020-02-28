import React, { Component } from "react";
import star from "../assets/images/Star.svg";

// interface IFavouriteCitiesState {
// 	cities: any;
// }
// interface IFavouriteCitiesProps {
// 	cities: any;
// }

// class FavouriteCities extends Component<IFavouriteCitiesProps, IFavouriteCitiesState> {
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

		if (cityValues.indexOf(newCity.value) === -1) {
			cities.push(newCity);
		} else {
			alert(`${newCity.value} already added.`)
			setTimeout(function () {

			}, 1000)
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

				<hr />
	
				<div className="d-flex justify-content-center">
					<ul className="list-group" style={{minWidth: "40rem"}}>
						{this.state.cities.map(city => {
							return (
								<li key={
									city.id
								}
									className="list-group-item d-flex justify-content-center"
									onClick={() => this.props.findAcity} >
									<span className="text">
										{city.value}
									</span>

									<button
										className="btn btn-warning"
										onClick={() => this.deleteCity(city.id)}>
										Remove
										</button>
								</li>
							);
						})}
					</ul>
				
				</div>
				<p className="d-flex justify-content-center mt-3">
				<button
						onClick={() => this.addCity()}
						className="btn btn-primary btn-lg">
						Add {this.props.currentCity} to favourites
						</button>
				</p>


			</React.Fragment>
		);
	}
}

export default FavouriteCities;
import React from 'react';
import {geolocated} from 'react-geolocated';
import {Spinner} from "../components";

interface ICurrentLocationProps {
	isGeolocationAvailable: boolean;
	isGeolocationEnabled: boolean;
	coords: any;
	callToDatabaseWithCoords: any;
}

class CurrentLocation extends React.Component<ICurrentLocationProps> {
	render() {
		return !this.props.isGeolocationAvailable
			? <div>Your browser does not support Geolocation</div>
			: !this.props.isGeolocationEnabled
				? <div>Geolocation is not enabled</div>
				: this.props.coords
					?
						<button className="btn-lg btn-outline-primary" onClick={ this.props.callToDatabaseWithCoords }>Get Your Local Weather Forecast</button>
					: <div>
						<Spinner/>
					</div>;
	}
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false,
	},
	userDecisionTimeout: 5000,
})(CurrentLocation);
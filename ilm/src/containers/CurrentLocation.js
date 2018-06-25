import React from 'react';
import {geolocated} from 'react-geolocated';
import {AUTH} from "../helpers/Auth";
import {Spinner} from "../components";

class CurrentLocation extends React.Component {
	
	
	
	render() {
		return !this.props.isGeolocationAvailable
			? <div>Your browser does not support Geolocation</div>
			: !this.props.isGeolocationEnabled
				? <div>Geolocation is not enabled</div>
				: this.props.coords
					?
						<button className="btn btn_currentLocation" onClick={ this.props.callToDatabaseWithCoords }>Get Your Local Weather Forecast</button>
					: <div><Spinner/></div>;
	}
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false,
	},
	userDecisionTimeout: 5000,
})(CurrentLocation);
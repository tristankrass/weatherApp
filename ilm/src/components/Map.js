import React from "react";

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: 59.4372, lng: 24.7454}}
	
	>
		{props.isMarkerShown && <Marker position={{ lat: 59.4372, lng: 24.7454}} />}
	</GoogleMap>
));
export default Map;

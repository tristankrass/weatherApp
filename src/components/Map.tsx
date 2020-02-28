import React, { ComponentClass } from "react";

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// interface IProps {
// 	lat: string;
// 	lon: string;
// 	isMarkerShown: boolean;
// }

const Map: ComponentClass = withScriptjs(withGoogleMap((props: any) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: props.lat, lng: props.lon }}
	>
		{
		props.isMarkerShown && 
		<Marker position={{ lat: props.lat, lng: props.lon }} />
		}
	</GoogleMap>
));
export default Map;

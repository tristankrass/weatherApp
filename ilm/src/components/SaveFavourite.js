import React from "react";
import star from "../assets/images/Star.svg";


const SaveFavourite = (props) => {
	return (
		<div className="saveFavourite">
			<img src={star} alt="Star" className="saveFavourite__star"/>
			<h1>
				Hello from favourite
			</h1>
		</div>
	
	)
};

export default SaveFavourite;
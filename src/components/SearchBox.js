import React from "react";

const SearchBox = ({change, value, newCity, longEnough}) => {
	
	return (
		<div className="searchBar searchBar__input">
			<input
				className="searchBox__input"
				type="text"
				value={value}
				onChange={change}
				placeholder="Find a city"
			/>
			<button className="btn btn__search"
			        onClick={newCity}
			        disabled={longEnough}>
				Search
			</button>
		</div>
	);
};

export default SearchBox;
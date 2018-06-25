import React from "react";

const SearchBox = ({change, value}) => (
	<div className="searchBox">
			<input
				className="searchBox__input"
				type="text"
				value={value}
				onChange={change}
				placeholder="Find a city"
			/>
		
	</div>
);

export default SearchBox;
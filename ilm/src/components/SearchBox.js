import React from "react";

const SearchBox = ({inputChange, value, onsubmit }) => (
	<div className="searchBox">
		<form onSubmit={onsubmit}>
			<input
				className="searchBox__input"
				type="text"
				onChange={inputChange}
				// value={value}
				placeholder="Sisesta linn"
			/>
			<input type="submit" value="Sisesta"/>
		</form>
	
	</div>
);

export default SearchBox;
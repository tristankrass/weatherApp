import React from "react";

const SearchBox = ( { change, value, newCity, longEnough, formSubmitHandler } ) => {
	return (
		<form className="form-inline mt-5"
		      style={ { width: "100vw" }}
		      onSubmit={formSubmitHandler}>
			<input
				className="form-control-lg"
				style={ {width: "75vw" }}
				type="text"
				value={value}
				onChange={change}
				placeholder="Find a city"
			/>
			<button className="btn btn-lg btn-primary "
			        disabled={longEnough}
			        onClick={newCity}>
				Search
			</button>
		</form>
	);
};
export default SearchBox;

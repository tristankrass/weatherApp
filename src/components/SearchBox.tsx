import React, { FunctionComponent } from "react";

interface ISearchBoxProps {
	change: any,
	value: string,
	newCity: any, 
	longEnough: boolean,
	formSubmitHandler: any
}

const SearchBox : FunctionComponent<ISearchBoxProps> = ( { change, value, newCity, longEnough, formSubmitHandler } ) => {
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

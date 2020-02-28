import React, { FunctionComponent } from "react";

interface ISearchBoxProps {
	change: any,
	value: string,
	newCity: any, 
	longEnough: boolean,
	formSubmitHandler: any
}

const SearchBox : FunctionComponent<ISearchBoxProps> = (
	 { change, value, newCity, longEnough, formSubmitHandler } ) => {
	return (
		<form className="form-inline"
		      onSubmit={formSubmitHandler}>
			<input
				className="form-control-lg  mt-5 col-sm-11 col-md-11"
				type="text"
				value={value}
				onChange={change}
				placeholder="Find a city"
			/>
			<button 
							className="btn btn-lg btn-primary mt-5 col-sm-1 col-md-1"
			        disabled={longEnough}
			        onClick={newCity}
							>
				Search
			</button>
		</form>
	);
};
export default SearchBox;

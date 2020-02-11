// import * as auth from "../config";

const Month = new Date().getMonth() + 1;
const Year = new Date().getFullYear();
export const dates = [];

for( let day = new Date().getDate();  dates.length <= 4; day += 1) {
	let monthAndYear = `.${Month}.${Year}`;
	let currentDate = day + monthAndYear;
	dates.push((currentDate));
}

export const handleCallToDatabas = () => {
	
}

// export const BASE_GMAPURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${auth.API_KEY_FOR_GMAPS}`;
export const BASE_GMAPURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY_FOR_GMAPS}`;


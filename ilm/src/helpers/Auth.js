export const AUTH = "5dcc995aff62366e8f77e7db83e17e72";
export const GMAPS = "AIzaSyBw8K5bHzJu0E6cUg4d934KGB24gBLqJIg";
export const localCity = "Stockholm";
export const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${localCity}&units=metric&appid=${AUTH}`;
export const BASE_GMAPURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GMAPS}`;
/*
export const BASE_GMAPURL = `https://www.google.com/maps/search/?api=AIzaSyBw8K5bHzJu0E6cUg4d934KGB24gBLqJIg&query=58.698017,-152.522067`;
*/

import * as auth from "../config";

let Today = new Date().getDate();
const Month = new Date().getMonth() + 1;
const Year = new Date().getFullYear();
export const currentDate = Today + "/" + Month + "/" + Year;
export const currentDate1 = Today + 1 + "/" + Month + "/" + Year;
export const currentDate2 = Today + 2  + "/" + Month + "/" + Year;
export const currentDate3 = Today + 3  + "/" + Month + "/" + Year;
export const currentDate4 = Today + 4 + "/" + Month + "/" + Year;
export const BASE_GMAPURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${auth.GMAPS}`;


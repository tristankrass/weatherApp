import * as auth from "../config";
export const localCity = "Stockholm";
export const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${localCity}&units=metric&appid=${auth.AUTH}`;


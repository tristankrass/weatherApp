# WeatherApp

# Use docker to run the app

```
docker build -t reactapp .
docker-compose run --rm service-ports reactapp
```

## Running the app
Here is how to make it work.
First Run npm install to download packages.
Secondly you have to add config.js file to src folder
with necessary api keys. There is on api key for openweather API
ant the other one is google maps.

Everything is currently built on top of the [OpenWeather API](https://openweathermap.org/api)
## Features

1. Get your weather information about your current location
2. Search for different weather forecasts.
3. 5-day forecast
4. Ability to save your favourite locations
5. Navigate using the google maps API

## Tech stack
1. React
2. Bootstrap

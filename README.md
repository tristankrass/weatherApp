# WeatherApp
![Build pipeline](https://github.com/tristankrass/weatherApp/workflows/Firebase%20Web%20CI/badge.svg)

Deployed on [firebase](https://ilmadd.firebaseapp.com)

## Use docker to run the app

By using docker you don't need to install node on your local system. You just need docker and docker-compose.

```
docker build -t reactapp .
docker-compose run --rm --service-ports reactapp
```

once you are inside docker container run: 
~~~
yarn
yarn start
~~~

`yarn` will install dependencies and `yarn start` will start the dev server on port 3000 inside the container
and is curretly mapped to port 3000 on your local machine.  Navigate to port `http://localhost:3000/` and you
should see the app running.

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
4. Ability to save your favourite locations (Currently saves to localstorage)
5. Navigate using the google maps API

## Tech stack
1. React


## Todos 
- [x] Add Typescript
- [x] Nicer UI
- [ ] Add database
- [ ] Add Users
- [x] PWA
- [ ] Push notificatsions 
- [ ] Refactoring the existing code
- [ ] Suggestions to form
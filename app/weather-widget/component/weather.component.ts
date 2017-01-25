import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../service/weather.service';

import { Weather } from '../model/weather';
import { Location } from '../model/location';

import { WEATHER_COLORS } from '../constants/constants';

declare var Skycons: any;

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css'],
    providers: [WeatherService]
})

export class WeatherComponent implements OnInit {
    pos: Position;
    weatherData = new Weather(null, null, null, null, null);
    currentSpeedUnit = "mph";
    currentTempUnit = "fahrenheit"
    currentLocation = new Location(null, null);
    icons = new Skycons();
    dataReceived = false;
    objDate = Date.now();

    constructor(private service: WeatherService) {
       }

    ngOnInit() {
        this.getCurrentLocation();
    }

    getCurrentLocation() {
        this.service.getCurrentLocation()
            .subscribe(position => {
                this.pos = position
                this.getCurrentWeather();
                this.getLocationName();
            },
            err => console.error(err));
    }

    getCurrentWeather() {
        this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)
            .subscribe(weather => {
                this.weatherData.temp = weather["currently"]["temperature"],
                this.weatherData.summary = weather["currently"]["summary"],
                this.weatherData.wind = weather["currently"]["windSpeed"],
                this.weatherData.humidity = weather["currently"]["humidity"],
                this.weatherData.icon = weather["currently"]["icon"]
                console.log("Weather ", this.weatherData);
                this.setIcon();
                this.dataReceived = true;
                this.objDate = Date.now();
            },
            err => console.log(err));
    }

    getLocationName() {
        this.service.getLocationName(this.pos.coords.latitude, this.pos.coords.longitude)
            .subscribe(location => {
                this.currentLocation.city = location["results"][1]["address_components"][0]["long_name"];
                this.currentLocation.state = location["results"][1]["address_components"][2]["short_name"];
                console.log(location);
            },
            err => console.error(err));
    }

    toggleTempUnits() {
        if(this.currentTempUnit == "fahrenheit") {
            this.currentTempUnit = "celsius";
        } else {
            this.currentTempUnit = "fahrenheit";
        }
    }

    toggleSpeedUnits() {
        if(this.currentSpeedUnit == "mph") {
            this.currentSpeedUnit = "kph";
        } else {
            this.currentSpeedUnit = "mph";
        }
    }

    setIcon() {
        this.icons.add("icon", this.weatherData.icon);
        this.icons.play();
    }

    setStyles(): Object {
        if(this.weatherData.icon) {
            this.icons.color = WEATHER_COLORS[this.weatherData.icon]["color"];
            return WEATHER_COLORS[this.weatherData.icon];
        } else {
            this.icons.color = WEATHER_COLORS["default"]["color"];
            return WEATHER_COLORS["default"];
        }
    }
}
const link = 'http://api.weatherstack.com/current?access_key=4b0b7d5c7a2e1d756b53f36069f81ac2'

let store = {
    city: 'London',
    feelslike: 0,
    cloudcover: 0,
    temperature: 0,
    humidity: 0,
    pressure: 0,
    visibility: 0,
    windSpeed: 0,
    precip: 0,
    isDay: 0,
    observationTime: 0,
    weatherDescriptions: 0,
};
const fetchData = async () => {
    const result = await fetch(`${link}&query=${store.city}`);
    const data = await result.json();
    console.log(data);
    const {
        current: { 
            feelslike, 
            cloudcover, 
            temperature, 
            humidity, 
            pressure, 
            visibility, 
            precip, 
            observation_time: observationTime, 
            wind_speed:windSpeed, 
            is_day:isDay, 
            weather_descriptions: weatherDescriptions},
    } = data;
    store = {
        ...store,
        feelslike,
        cloudcover,
        temperature,
        humidity,
        pressure,
        visibility,
        precip,
        windSpeed,
        isDay,
        observationTime,
        weatherDescriptions: weatherDescriptions[0],
    }
    renderComponent();
}
const markup = () => {
    return `<div class="wrapper">
    <div class="content">
        <div class="location">
            <input class="input" type="text" name="" placeholder="  ">
            <label for="Location" class="placeholder" >Location</label>
        </div>
        <div class="grid__header">
            <div class="temperature">
                <p id="temperature"></p>
            </div>
            <div class="temperature__icon">
                <img src="/js_weather/img/sun_cloud.png" alt="icon">
            </div>
            <div class="weather__conditions">
                <p id="weather__conditions"></p>
            </div>
            <div class="main">
                <div class="feels__like">Feels like 55&#176;</div>
                <div class="time">09:18</div>
                <div class="date">Tuesday, April 28, 2015</div>
                <div class="min_max">
                    <p id="min" class="min"></p>
                    <p id="max" class="max"></p>
                </div>
            </div>
            <div class="humidity">
                <img src="/js_weather/img/humidity.png" alt="img">
                <p id="humidity">Himidity 59%</p>
            </div>
            <div class="precipitation">
                <img src="/js_weather/img/umbrella.png" alt="img">
                <p>Precipitation 0 in</p>
            </div>
            <div class="direction__wind">
                <div class="circle">
                    <div class="direction direction_1">N</div>        
                    <div class="direction direction_2">E</div>        
                    <div class="direction direction_3">S</div>        
                    <div class="direction direction_4">W</div>        
                    <div class="circle__little">
                        <p class="wind__speed"></p>
                        <div class="direction__wind_icon"></div>
                    </div>
                </div>
            </div>
            <div class="pressure">
                <img src="/js_weather/img/barometer.png" alt="img">
                <p id="pressure">Pressure 101kPa</p>
            </div>
            <div class="visibility">
                <img src="/js_weather/img/visibility.png" alt="img">
                <p id="visibility">Visibility 8 km</p>
            </div>
        </div>
        <div class="convex"></div>
        <div class="grid__footer">
            <ul class="weather__ahead_1">
                <li class="weather__ahead_hour weather__ahead_hour_1">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/minicloud.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time_now">
                        NOW
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        11&#176;
                    </p>
                </li>
                <li class="weather__ahead_hour weather__ahead_hour_2">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/miniheavyrain.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time">
                        9AM
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        16&#176;
                    </p>
                </li>
                <li class="weather__ahead_hour weather__ahead_hour_3">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/miniligthrain.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time">
                        12PM
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        19&#176;
                    </p>
                </li>
                <li class="weather__ahead_hour weather__ahead_hour_4">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/minisun.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time">
                        3PM
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        21&#176;
                    </p>
                </li>
                <li class="weather__ahead_hour weather__ahead_hour_5">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/minisuncloud.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time">
                        6PM
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        23&#176;
                    </p>
                </li>
                <li class="weather__ahead_hour weather__ahead_hour_6">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/minisnow.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time">
                        9PM
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        20&#176;
                    </p>
                </li>
                <li class="weather__ahead_hour weather__ahead_hour_7">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/minicloud.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time">
                        12AM
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        16&#176;
                    </p>
                </li>
                <li class="weather__ahead_hour weather__ahead_hour_8">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/minimoon.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time">
                        3AM
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        11&#176;
                    </p>
                </li>
            </ul>
            <ul class="weather__ahead_2">
                <li class="weather__ahead_day weather__ahead_day_1">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/middlecloud.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time_now">
                        TODAY
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        19&#176; | 10&#176;
                    </p>
                </li>
                <li class="weather__ahead_day weather__ahead_day_2">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/middleheavyrain.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time">
                        WED
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        17&#176; | 9&#176;
                    </p>
                </li>
                <li class="weather__ahead_day weather__ahead_day_3">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/middlesun.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time">
                        THU
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        23&#176; | 14&#176;
                    </p>
                </li>
                <li class="weather__ahead_day weather__ahead_day_4">
                    <p class="weather__ahead_hour_icon">
                        <img src="/js_weather/img/middlesuncloud.png" alt="icon">
                    </p>
                    <p class="weather__ahead_hour_time">
                        FRI
                    </p>
                    <p class="weather__ahead_hour_temperature">
                        21&#176; | 12&#176;
                    </p>
                </li>
            </ul>
        </div>
        <div class="emptiness"></div>
    </div>
</div>`
}
const renderComponent = () => {
    root.innerHTML = markup();
}
fetchData();
    /*.then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.placeholder').innerHTML = data.name;
        document.querySelector('.time').textContent = new Date().toLocaleTimeString().slice(0,-3);
        document.querySelector('.date').textContent = new Date().toDateString();
        document.querySelector('#humidity').innerHTML = 'Humidity '+ data.main.humidity + '%';
        document.querySelector('.wind__speed').innerHTML = Math.round(data.wind.speed) + ' km/h';
        document.querySelector('#pressure').innerHTML = 'Pressure '+ (data.main.pressure/10) + 'kPa';
        document.querySelector('#visibility').innerHTML = 'Visibility '+ (data.visibility/1000) + 'km';
        document.querySelector('#temperature').innerHTML = Math.round(data.main.temp-273) + 'C&#176;';
        document.querySelector('.feels__like').innerHTML = 'Feels like '+ Math.round(data.main.feels_like-273) + 'C&#176;';
        document.querySelector('#weather__conditions').textContent = data.weather[0].main;
        document.querySelector('#min').innerHTML = 'Min '+ Math.round(data.main.temp_min-273) + 'C&#176;' +' | ';
        document.querySelector('#max').innerHTML = 'Max '+ Math.round(data.main.temp_max-273) + 'C&#176;';
        
    })
    .catch(function (){

    });*/
    
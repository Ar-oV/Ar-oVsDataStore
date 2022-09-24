const link = 'http://api.weatherstack.com/current?access_key=da8fdd54aa06796a4e8718dcfcd36397'
const button = document.querySelector('.button_ready')

let store = {
    city: 'Los-Angeles',
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
    localtime: 0,
    windDegree: 0,
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
            weather_descriptions: weatherDescriptions,
            wind_degree: windDegree,
        },
        location: {
            localtime,
        },
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
        localtime,
        windDegree,
    }
    renderComponent();
    let deg = store.windDegree;
    const directionWindIcon = document.querySelector('.direction__wind_icon')
    directionWindIcon.style.transform = 'rotate('+ deg + 'deg)';
    console.log(directionWindIcon);
    console.log(deg);
    console.log('rotate('+ deg + 'deg)');
    console.log(directionWindIcon.style.transform);
};
const getImage = (weatherDescriptions) => {
    const value = weatherDescriptions.toLowerCase();
    switch(value) {
        case 'overcast':
            return 'overcast_cloudy_cloud.png';
        case 'partly cloudy':
            return 'sun_cloud.png';
        case 'sunny':
            return 'sun.png';
        case 'clear':
            return 'moontime.png';
        case 'heavy rain with thunderstorm':
            return 'weather_storms.png';
        case 'heavy rain':
            return 'showers_rain.png';
        case 'light rain shower':
            return 'rain.png';
        default:
            return 'sun.png';
    }
}
const markup = () => {
    
    const { city, temperature, feelslike, weatherDescriptions, observationTime, localtime, cloudcover, humidity, pressure, visibility, precip, windSpeed} = store;
    return `
            <div class="grid__header">
                <div class="temperature">
                    <p id="temperature">${temperature}&#176;</p>
                </div>
                <div class="temperature__icon">
                    <img src="/js_weather/img/${getImage(weatherDescriptions)}" alt="icon">
                </div>
                <div class="weather__conditions">
                    <p id="weather__conditions">${weatherDescriptions}</p>
                </div>
                <div class="main">
                    <div class="feels__like">Feels like ${feelslike}&#176;</div>
                    <div class="time">${localtime.slice(11,16)}</div>
                    <div class="date">${localtime.slice(0,-6)}</div>
                    <div class="min_max">
                        <p id="min" class="min"></p>
                        <p id="max" class="max"></p>
                    </div>
                </div>
                <div class="humidity">
                    <img src="/js_weather/img/humidity.png" alt="img">
                    <p id="humidity">Himidity ${humidity}%</p>
                </div>
                <div class="precipitation">
                    <img src="/js_weather/img/umbrella.png" alt="img">
                    <p>Precipitation ${precip} in</p>
                </div>
                <div class="direction__wind">
                    <div class="circle">
                        <div class="direction direction_1">N</div>        
                        <div class="direction direction_2">E</div>        
                        <div class="direction direction_3">S</div>        
                        <div class="direction direction_4">W</div>        
                        <div class="circle__little">
                            <p class="wind__speed">${windSpeed} km/h</p>
                            <div class="direction__wind_icon"></div>
                        </div>
                    </div>
                </div>
                <div class="pressure">
                    <img src="/js_weather/img/barometer.png" alt="img">
                    <p id="pressure">Pressure ${pressure/10}kPa</p>
                </div>
                <div class="visibility">
                    <img src="/js_weather/img/visibility.png" alt="img">
                    <p id="visibility">Visibility ${visibility} km</p>
                </div>
            </div>
            <div class="convex"></div>
            <div class="emptiness"></div>`;
};

const renderComponent = () => {
    root.innerHTML = markup();
};
button.addEventListener('click', myClick);
function myClick(){
    console.log(store.windDegree);
    let a = document.querySelector('.input').value;
    store.city = a;
    fetchData();
};

// const directionWindIcon = document.querySelector('.direction__wind_icon');
// function windDirection(){
//     //fetchData();
//     //let deg = store.windDegree;
//     //directionWindIcon.style={transform: `rotate(${store.windDegree.parameters.wd.values}deg) scale(-1, -1)`};
//     //console.log(deg);
// };
// windDirection();


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
    
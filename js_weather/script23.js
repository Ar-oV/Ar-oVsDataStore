fetch('https://api.openweathermap.org/data/2.5/weather?q=syktyvkar&appid=c38b3050eef7e19533341e2ea1e743dc')
    .then(function (resp) { return resp.json() })
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

    });
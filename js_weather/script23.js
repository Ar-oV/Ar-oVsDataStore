fetch('https://api.openweathermap.org/data/2.5/weather?q=rayevskaya&appid=c38b3050eef7e19533341e2ea1e743dc')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (){

    });
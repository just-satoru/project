window.addEventListener('load', () => {
    let lon;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let weatherImg = document.querySelector('.weather-img');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f7c8bd70962fc518e2d2b2cfcca59000&units=metric `;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { name, main, wind, weather} = data;
                    //Set DOM elements from the API
                    temperatureDegree.textContent = main.temp;
                    temperatureDescription.textContent = weather[0].description;
                    locationTimezone.textContent = name;
                    console.log(weather[0].icon);
                    weatherImg.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`)
                    //Set Icon
                    
                    setIcons(weather[0].icon, document.querySelector('.icon'));
                });

        });

    }

});

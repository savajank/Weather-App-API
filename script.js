let  weather = { //have to figure out the API data fetching
    apikey: "536e7737cef7d034f4efc7abf205ec7c",
    fetchlong_lat: function(city){
        fetch("http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=1&appid=536e7737cef7d034f4efc7abf205ec7c").then((response) => response.json()).then((data) => this.fetch_weather(data));
    },

    fetch_weather:function(data){
        const { lat } = data[0];
        const{ lon } = data[0];
        console.log(lat,lon);
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=536e7737cef7d034f4efc7abf205ec7c").then((response) => response.json()).then((data) => this.get_data(data));
    },

    get_data:function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = Math.round((temp - 273.15)) + "℃";
        document.querySelector(".Description").innerText = "Description: " + description;
        document.querySelector(".Humidity").innerText = "Humidity: " + humidity;
        document.querySelector(".wind").innerText = "Wind speed: " + speed;
    },

    search :function(){
        this.fetchlong_lat(document.querySelector(".search-bar").value);
    }
};

document .querySelector(".search button") .addEventListener("click", function(){ weather.search();});


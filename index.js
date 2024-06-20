const apiKey = "dcbc42c1fbfdf31605d593d1d1c3ac13";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none"; // Hide weather section if error
        } else {
            document.querySelector(".error").style.display = "none";
            var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

            if (data.weather[0].main == "Clouds") {
                document.querySelector(".weather-icon").src = "clouds.png";
            } else if (data.weather[0].main == "Clear") {
                document.querySelector(".weather-icon").src = "clear.png";
            } else if (data.weather[0].main == "Rain") {
                document.querySelector(".weather-icon").src = "rain.png";
            } else if (data.weather[0].main == "Drizzle") { // Corrected spelling
                document.querySelector(".weather-icon").src = "drizzle.png"; // Corrected spelling
            } else if (data.weather[0].main == "Mist") {
                document.querySelector(".weather-icon").src = "mist.png";
            }

            document.querySelector(".weather").style.display = "block"; // Show weather section after data is fetched
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}



searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

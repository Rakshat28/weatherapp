const apiKey="dcbc42c1fbfdf31605d593d1d1c3ac13";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");


async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404)
        {
            document.querySelector(".error").style.display="block";
        }
        else{
            document.querySelector(".error").style.display="none";
        var data=await response.json();
        
    
        console.log(data);
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML=data.wind.speed+ "Km/hr";
    
        if(data.weather[0].main=="Clouds"){
            document.querySelector(".weather-icon").src="clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            document.querySelector(".weather-icon").src="clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            document.querySelector(".weather-icon").src="rain.png";
        }
        else if(data.weather[0].main=="Drizzel"){
            document.querySelector(".weather-icon").src="drizzel.png";
        }
        else if(data.weather[0].main=="Mist"){
            document.querySelector(".weather-icon").src="mist.png";
        }
    
    }
}
    searchButton.addEventListener("click",()=>{
        checkWeather(searchBox.value)
        document.querySelector(".weather").style.display=block;
    })

    
    
        

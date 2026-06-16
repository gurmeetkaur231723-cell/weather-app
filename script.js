const apiKey = "936eb9b046d75df3210065551b858fd4";

async function getWeather(){

const city = document.getElementById("city").value;

if(city===""){
alert("Please enter a city name");
return;
}

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(url);
const data = await response.json();

if(data.cod !== 200){
document.getElementById("weatherResult").innerHTML =
"City not found!";
return;
}

document.getElementById("weatherResult").innerHTML = `
<div class="weather-card">

<h2>${data.name}</h2>

<h1>${data.main.temp}°C</h1>

<p>
🌤️ ${data.weather[0].description}
</p>

<p>
💧 Humidity: ${data.main.humidity}%
</p>

<p>
🌬️ Wind: ${data.wind.speed} m/s
</p>

</div>
`;


}
catch(error){

document.getElementById("weatherResult").innerHTML =
"Something went wrong!";

}

}
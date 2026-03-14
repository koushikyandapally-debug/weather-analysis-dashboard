const apiKey = "c3fe8d2da199a79c5eb203f3518aa342";

function getWeather(){

let city = document.getElementById("city").value;

let url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
.then(response => response.json())
.then(data => {

document.getElementById("cityName").innerText = data.name;

document.getElementById("temp").innerText = data.main.temp;

document.getElementById("humidity").innerText = data.main.humidity;

document.getElementById("wind").innerText = data.wind.speed;

document.getElementById("weather").innerText = data.weather[0].main;

})
.catch(error=>{
  alert("City not found");
});
}

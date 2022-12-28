function displayTemperature(response) {
let cityElement = document.querySelector("#city")    
let temperatureElement = document.querySelector("#temperature");
let typeElement = document.querySelector("#type");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
typeElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "05c2b16e8ce157a0f618d503eb809bb5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Gaillard&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
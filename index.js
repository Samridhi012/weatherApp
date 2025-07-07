//So to get current weather for London: 
// JSON: http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London

//To get 7 day weather for US Zipcode 07112: 
// JSON: http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7

// function newPage(){
//     window.location.href="index.html";
// }

key = "005186776a4c4589a6e90608250407";
url ="http://api.weatherapi.com/v1";

const locationInput = document.getElementById('cityInput');
const searchButton = document.getElementById('search');   
const getCity = document.getElementById('city');
const getRegion = document.getElementById('region');
const getCountry = document.getElementById('country');
const getTemperature = document.getElementById('temperature');
const getDescription = document.getElementById('description');

searchButton.addEventListener('click',() => {
    const location = locationInput.value;
    if (location){
        fetchWeather(location);
    }
});
locationInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

async function fetchWeather(location){

    // for Current Weather
    const currentWeatherURL= `${url}/current.json?key=${key}&q=${location}`;

    try {
        const response = await fetch(currentWeatherURL);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data); 
        }
    } catch (error) {
        console.log("Error fetching data", error);
    }

    //for
    const forecastURL= `${url}/forecast.json?key=${key}&q=${location}&days=15`;

    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayDaywiseForecast(data); 
        }
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

//GENERAL BOX
function displayWeather(data){

    // for Current Weather
    getCity.textContent= data.location.name;
    getRegion.textContent= data.location.region;
    getCountry.textContent= data.location.country;
    getTemperature.textContent = data.current.temp_c;
    getDescription.textContent = data.current.condition.text;

    const imageAdd = document.createElement('img');
    imageAdd.src = data.current.condition.icon;
    imageAdd.alt = data.current.condition.text;
    getTemperature.appendChild(img);

    //for 
    
}

//hourly weather data
function displayHourlyForecast(){

}

//Daywise weather
function displayDaywiseForecast(data){
    
}
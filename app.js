const cityInput = document.querySelector('.CityInput');
const button = document.getElementById('getWeatherBtn');
const resultDiv = document.getElementById('resultDiv');


button.addEventListener('click', async function getWeather() {
    const cityName = cityInput.value;

    if(!cityName){
        resultDiv.innerText = "Please enter a city name";
        return;
    }
    
    resultDiv.innerText = "Fetching data...";

    try {
        const response = await fetch(`https://wttr.in/${cityName}?format=j1`);
        
        const data = await response.json();

            

            const currentCondition = data.current_condition[0];
            const Temp = currentCondition.temp_C;
            const weatherDesc = currentCondition.weatherDesc[0].value;

            resultDiv.innerHTML = `
            <div class="weather-card">
            <h1 class="weather-city">${cityName}</h1>
            <p class="weather-Temp">Temperature: ${Temp} degree celcius</p>
            <p class="weather-desc">Condition: <span>${weatherDesc}</span></p>
            </div>
            `;
        
    } catch (error) {
        console.error('error fetching weather: ', error);
        resultDiv.innerText = `could not find weather for that city . try again`
    }
})
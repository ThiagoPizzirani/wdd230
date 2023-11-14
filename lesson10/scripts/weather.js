const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const more = document.querySelector('#moreinfo');

const url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=49.750&lon=6.635&appid=1c1b7b696dffdb06b0a7ea9a9875326f";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data){

    console.log(data.weather[0].description)

    currentTemp.innerHTML =`${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${data.weather[0].description}`; 
    more.innerHTML = `<p>Humidity: ${data.main.humidity}%</p>
                    <p>Feels Like: ${data.main.feels_like}&deg;F</p>
                    <p>Wind Speed: ${data.wind.speed} mph</p>`
}
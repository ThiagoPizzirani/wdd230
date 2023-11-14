document.getElementById("year").innerHTML = "&copy" + new Date().getFullYear();

const date = document.lastModified;
      const lastModified = new Date(date).toLocaleString();
      document.getElementById("last-mod").innerHTML = "Last Modification: " + lastModified;


const visitsDisplay = document.querySelector("#page-visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	if (visitsDisplay !==null){
      visitsDisplay.textContent = 'Page Visits: ' + numVisits;}
} else {
      if (visitsDisplay !==null){
	visitsDisplay.textContent = "Page Visits: First time, welcome!";}
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
//range.addEventListener('change', displayRatingValue);
//range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const kp1 = document.querySelector("#pass1");
const kp2 = document.querySelector("#pass2");
const message = document.querySelector("#formmessage");

// kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const more = document.querySelector('#moreinfo');

const url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=43.825&lon=-111.792&appid=1c1b7b696dffdb06b0a7ea9a9875326f";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
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
    currentTemp.innerHTML =`${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `Condition: ${data.weather[0].description}`; 
    more.innerHTML = `<p>Humidity: ${data.main.humidity}%</p>
                    <p>Feels Like: ${data.main.feels_like}&deg;F</p>
                    <p>Wind Speed: ${data.wind.speed} mph</p>`
}
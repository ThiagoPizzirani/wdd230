document.getElementById("year").innerHTML = "Educational site only (WDD230) - &copy" + new Date().getFullYear();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
 
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const more = document.querySelector('#moreinfo');

const url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=20.50&lon=-86.94&appid=1c1b7b696dffdb06b0a7ea9a9875326f";

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
    currentTemp.innerHTML =`<b>${data.main.temp}&deg;F</b> and Humidity: <b>${data.main.humidity}%</b>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = `Current Condition: <b>${data.weather[0].description}</b>`; 
}


const url2 = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=20.50&lon=-86.948&appid=1c1b7b696dffdb06b0a7ea9a9875326f";

async function apiFetch2(){
    try{
        const response = await fetch(url2);
        if (response.ok) {
            const data2 = await response.json();
            displayResults2(data2);
        }
        else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch2();


function displayResults2(data2){

    const date = `${data2.list[0].dt_txt}`;
    
    more.innerHTML = `<p>1-day Forecast on  (${data2.list[0].dt_txt.substring(5,10)}) is ${data2.list[0].main.temp}&deg;F</p>`

}

/** 
const banner = document.querySelector('#week-banner');
const currentDay = new Date(Date.now()).getDay();

if (currentDay == 1 || currentDay == 2 || currentDay == 3) 
{
        banner.innerHTML = `You are invited to attend the Chamber of Commerce meet and greet on Wednesday at 7:00 PM`;
} 
else {banner.classList.toggle('close');}

banner.addEventListener('click', () => {
	banner.classList.toggle('close');
});*/


const list = 'data/prices.json'
let allList = new Array();

function construct(priceList) {
    allList = priceList;
    const Listing = document.querySelector("#price");

    console.log(allList);

    allList.forEach((currentItem) => {
      const html = `<tr class='col-title'>
      <td>${currentItem.type}</td>
      <td>${currentItem.max}</td>
      <td>${currentItem.halfreserv}</td>
      <td>${currentItem.fullreserv}</td>
      <td>${currentItem.halfwalk}</td>
      <td>${currentItem.fullwalk}</td></tr>`;
    Listing.innerHTML += html; 
      });
}

async function getList(url) {
    const response = await fetch(url);
    if (response.ok) {
      const priceList = await response.json();
      construct(priceList.rentals);
      return priceList.rentals;
    }
  }

getList(list);
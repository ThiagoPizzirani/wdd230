const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
 
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

document.getElementById("year").innerHTML = "&copy" + new Date().getFullYear();

const date = document.lastModified;
      const lastModified = new Date(date).toLocaleString();
      document.getElementById("last-mod").innerHTML = "Last Modification: " + lastModified;


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const card = document.querySelector(".member-card");
const card2 = document.querySelector(".member-card2");
const card3 = document.querySelector(".member-card3");
const events = document.querySelector("#events");
const weather = document.querySelector("#weather");
      
      modeButton.addEventListener("click", () => {
            if (modeButton.textContent.includes("☑️dark")) {
                  main.style.background = "#000";
                  card.style.background = "#000";
                  card2.style.background = "#000";
                  card3.style.background = "#000";
                  events.style.background = "#000";
                  weather.style.background = "#000";
                  main.style.color = "#fff";
                  events.style.color = "#fff";
                  weather.style.color = "#fff";
                  modeButton.textContent = "❎light";
            } else {
                  main.style.background = "#eee";
                  main.style.color = "#000";
                  card.style.background = "#576CBC";
                  card2.style.background = "#576CBC";
                  card3.style.background = "#576CBC";
                  events.style.background = "#19376D";
                  weather.style.background = "#19376D";
                  events.style.color = "rgb(219, 186, 55)";
                  weather.style.color = "rgb(219, 186, 55)";
                  modeButton.textContent = "☑️dark";
            }
      });
      
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const visitmsg1 = document.querySelector('#visitmsg');
 
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

document.getElementById("year").innerHTML = "&copy" + new Date().getFullYear();

const date = document.lastModified;
      const lastModified = new Date(date).toLocaleString();
      document.getElementById("last-mod").innerHTML = "Last Modification: " + lastModified;

/** const setdate = new Date().getDate();

const timestamp = Date.now()
const timestampconv = new Date(timestamp).getDate()

const compare = (setdate - timestamp)

let dateVisit = Number(localStorage.getItem("dateVisitmsg")) || setdate;

     if (dateVisit !== 0) {
                  if ( compare > 1) {
                        visitmsg1.innerHTML = 'Your last visited ' + compare + ' days ago'}
                  else {visitmsg1.innerHTML = 'Back so soon! Awesome '}
     } else {
           visitmsg1.innerHTML = "Welcome, let us know if you have any questions";
     } 
**/

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

      
// let field = document.querySelector('#timestamp');
// let timenow = Date.now();
// Set the date
// field.value = timenow;


let allList = new Array();

function construct(membersList) {
    allList = membersList;

    const Listing = document.querySelector("#gridList");
    for (let i = 0; i < 3; i++) {

            if (allList[i].membership != "Bronze") {
           const html = `<section>
           <img src='${allList[i].icon}' width = \'120px\'; height:\'120px\'>
           <h3>${'Business Name: ' + allList[i].name}</h3>
           <h4>${'Address: ' + allList[i].address}</h4>
           <h4>${'Phone Number: ' + allList[i].phonenumber}</h4>
           <h4>${'Website: ' + allList[i].website + ' years'}</h4>
           <h4>${'Membership: ' + allList[i].membership + ' - since: ' + allList[i].since}</h4>
           </section>`;
          Listing.innerHTML += html;

       } 
      }
    };

const jsonurl = 'data/members.json'

async function getMembers(jsonurl) {
    const response = await fetch(jsonurl);
    if (response.ok) {
      const membersList = await response.json();
      construct(membersList.members);
      return membersList.members;
    }
  }

getMembers(jsonurl);
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
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const kp1 = document.querySelector("#pass1");
const kp2 = document.querySelector("#pass2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

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

document.getElementById("year").innerHTML = "&copy" + new Date().getFullYear();

const date = document.lastModified;
      const lastModified = new Date(date).toLocaleString();
      document.getElementById("last-mod").innerHTML = "Last Modification: " + lastModified;


const visitsDisplay = document.querySelector("#page-visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = 'Page Visits: ' + numVisits;
} else {
	visitsDisplay.textContent = "Page Visits: First time, welcome!";
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
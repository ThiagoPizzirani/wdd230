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

let allList = new Array();

function construct(prophetList) {
    allList = prophetList;
    //console.log(prophetList);
    document.querySelector('#prophets_list').innerHTML = '';
    const Listing = document.querySelector("#prophets_list");
    allList.forEach((currentItem) => {
      const html = `<article style=\'border-width:3px; justify-items: center; width: 450px; border-style:solid; border-color:#F0F0F0;\'>
      <h3>${'President ' + currentItem.name +' '+ currentItem.lastname}</h3>
      <h4>${'Born: ' + currentItem.birthdate}</h4>
      <h4>${'From: ' + currentItem.birthplace}</h4>
      <h4>${'Served for: ' + currentItem.length + ' years'}</h4>
      <img src='${currentItem.imageurl}' width = \'350px\'; height:\'350px\'>
      </article>`;
    Listing.innerHTML += html;
      });
}

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'

async function getProphetList(url) {
    const response = await fetch(url);
    if (response.ok) {
      const prophetList = await response.json();
      construct(prophetList.prophets);
      return prophetList.prophets;
    }
  }

getProphetList(url);


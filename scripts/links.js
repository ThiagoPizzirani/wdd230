const linksURL = "https://thiagopizzirani.github.io/wdd230/data/links.json"; 

//*const linksURL = "/data/links.json" *//

const divlinks = document.querySelector('#links');
 
async function getLinks() {
    const response = await fetch(linksURL);
    if(response.ok) {
        const data = await response.json();
        const displayLinks = (lessons) => {

            let list = document.createElement('ul');
            lessons.forEach(lesson => {
                
                let listItem = document.createElement('li');
                
                listItem.innerHTML += `${lesson.lesson} &nbsp;`;
                let linkCounter = 0;

                lesson.links.forEach(link => {
                    let linkAnchor = document.createElement('a');
                    linkAnchor.setAttribute('href',link.url);
                    linkAnchor.setAttribute('target','_blank');
                    linkAnchor.textContent = `${link.title}`;
                    listItem.appendChild(linkAnchor);

                    linkCounter += 1;
                    if(linkCounter < lesson.links.length) {
                        listItem.innerHTML += "&nbsp; | &nbsp;";
                    }

                });
              
                list.appendChild(listItem);
            });
            divlinks.appendChild(list);
        };
        displayLinks(data.lessons);
    }
}
 
getLinks();
/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
    templeList.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent=temple.templeName;
        const img = document.createElement("img");
        // set the image src attribute
        img.setAttribute('src', temple.imageUrl);

        // append the h3 elements and image element to the article element
        article.appendChild(h3);
        article.appendChild(img);
        // append the articles to the templeelements
        templeElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    // convert to .json
    if (response.ok) {
        const data = await response.json();
        // pass the data elements into the templelist array
        templeList = data;

        // call the displayTemples function and pass in the list of temples from templeList
        displayTemples(templeList);
    }
    else{
        console.log("sorry cant run")
    }
};


/* reset Function */
// a reset function to clear all the element of the article from the templeElement
const reset = () => {
    templeElement.textContent = "“”";
}



/* sortBy Function */
// declare a function expression called sortbt
let sortBy = (temples)=>{
    // call the reset function
    reset();
    // define a variable called filter 
    let filter = document.getElementById("sortBy");
    // switch case using the filter as value
    switch(filter){
        case "utah":
            displayTemples(temple.filter(temple =>temple.location.includes("Utah")));
        break;

        case "nonutah":
            displayTemples(temple.filter(temple =>!temple.location.includes("Utah")));
        break;

        case "":
        break;

        case "":
        break;

        default:
    }
}



/* Event Listener */
// add an event listener to the html with id sortBy send an arrow function to it 
document.querySelector("#sortBy").addEventListener('change', ()=> {sortBy(templeList)});

getTemples("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
console.log(templeList);
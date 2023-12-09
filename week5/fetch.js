// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
};

// create a function called getpokemonList
async function getPokemonList(ur){
    // make request to the api to the url passed in
    const response = await fetch(ur);
    // check to see if fetch was successful
    if (response.ok){
        // convert the api promise to a json file.
        const data = await response.json();
        // call the dostuffList and pass in the data
        dostuffList(data);
    }
};


function doStuff(data) {
  const output = document.querySelector("#output");
  results = data;
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  output.innerHTML = html;
  console.log("first: ", results);
  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);



// create a dostuffList function
function dostuffList(data){
    console.log(data);
    const outputlist = document.querySelector("#outputlist");
    pokeList = data.results;
    pokeList.forEach((item) => {
        const html1 = `<h2>${item.name}</h2>`;
    outputlist.innerHTML += html1;
        
    });
};
//call the getPokemonList function with the urlList variable
getPokemonList(urlList);




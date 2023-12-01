/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let ProfileInfo = {
    name: "John Doe",
    age: 25,
    gender: "Male",
    favouritefood : ["Fufu","Banku","Yam"],
    placelived : [{
        place: "Accra",length: "3 years"},
        {place: "Koforidua",length: "12 years"}],
    hobbies : ["Reading","Listening to music","Watching Movies"],
    images : "w02-task/images/IMG_0641.jpeg"
};




/* Populate Profile Object with placesLive objects */
ProfileInfo.placelived.push(
    {
        place : "Ho",
        length : "1 years"
    }
)



/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = ProfileInfo.name;

/* Photo with attributes */




/* Favorite Foods List*/
ProfileInfo.favouritefood.forEach(food => {
    let li= document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});


/* Hobbies List */
ProfileInfo.hobbies.forEach(hobbie => {
    let li= document.createElement("li");
    li.textContent = hobbie;
    document.getElementById("hobbies").appendChild(li);
});


/* Places Lived DataList */
ProfileInfo.placelived.forEach(place => {
    let dt= document.createElement("dt");
    dt.textContent = place.place
    document.getElementById("places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length
    document.getElementById("places-lived").appendChild(dd);
});



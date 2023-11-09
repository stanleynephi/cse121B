/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Nuley Stanley Nephi";
let currentYear = new Date().getFullYear();
let profilePicture = "images/IMG_0641.jpeg";




/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML= `<strong>${fullName}</strong>`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Profle Image of "+ fullName);
let text = document.getElementById("year").textContent;





/* Step 5 - Array */
const favouriteFood = ["Rice", "Banku and Okro", "Fufu With Palmnut Soup"];
foodElement.innerHTML=`${favouriteFood}`;
let food2 = "Banana Bread";
favouriteFood.push(food2);
foodElement.innerHTML+= `<br> ${favouriteFood}`;
favouriteFood.shift();
foodElement.innerHTML+= `<br> ${favouriteFood}`;
favouriteFood.pop();
foodElement.innerHTML+= `<br> ${favouriteFood}`;







/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    return number1 + number2;


}

function addNumber() {
    let addNumber1 = parseInt(document.querySelector("#add1").value);
    let addNumber2 = parseInt(document.querySelector("#add2").value);
    let sum = document.querySelector("#sum").value = add(addNumber1,addNumber2);
}


document.querySelector('#addNumbers').addEventListener('click', addNumber);


/* Function Expression - Subtract Numbers */
let y = function subtract(number1,number2){
    return number1 - number2
}

function subtractNumber() {
    let subtract1 = parseInt(document.querySelector("#subtract1").value);
    let subtract2 = parseInt(document.querySelector("#subtract2").value);
    let sub = document.querySelector("#difference").value = y(subtract1,subtract2);
}


document.querySelector('#subtractNumbers').addEventListener('click', subtractNumber);


/* Arrow Function - Multiply Numbers */
// Multiplication function
let multiply = (factor1, factor2) => factor1 * factor2;

// Event listener for the button click
document.querySelector("#multiplyNumbers").addEventListener("click", function () {
    // Get values from input fields when the button is clicked
    let factor1 = parseInt(document.querySelector("#factor1").value);
    let factor2 = parseInt(document.querySelector("#factor2").value);

    // Call the multiply function and display the result
    let result = multiply(factor1, factor2);
    document.querySelector("#product").value = result;
});



/* Open Function Use - Divide Numbers */
function Divide(num1,num2){
    return num1 / num2;


}

function DivideNumber() {
    let divNumber1 = parseInt(document.querySelector("#dividend").value);
    let divNumber2 = parseInt(document.querySelector("#divisor").value);
    let sum = document.querySelector("#quotient").value = Divide(divNumber1,divNumber2);
}


document.querySelector('#divideNumbers').addEventListener('click', DivideNumber);

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let elements = document.getElementById("array");
elements.innerHTML = `${Numbers}`;

/* Output Odds Only Array */
let oddArray = Numbers.filter(oddnumber);
function oddnumber(list){
    /* find the modulo of a number divided by two
    if it equals zero then push that element to an array called oddArray*/
    for (let i = 0; list > i; i++){
        if (list % 2 === 0){
            return false;
        }
    }
    return list>1;
}

document.getElementById("odds").textContent=oddArray.join(",");


/* Output Evens Only Array */
let evenArray = Numbers.filter(evennumber);
function evennumber(list){
    /* find the modulo of a number divided by two
    if it equals zero then push that element to an array called oddArray*/
    for (let i = 1; list > i; i++){
        if (list % 2 === 0){
            return true;
        }
    }
}

document.getElementById("evens").textContent=evenArray.join(",");



/* Output Sum of Org. Array */
let valueMain = 0;
let sumValue = Numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.getElementById("sumOfArray").textContent = sumValue;

/* Output Multiplied by 2 Array */
let multiple = Numbers.map(number => number*2);
document.getElementById("multiplied").textContent = multiple;

/* Output Sum of Multiplied by 2 Array */
let mulpiples = Numbers.map(number => number*2);
let sums = mulpiples.reduce((accumulator,currentValue)=> accumulator + currentValue, 0);

document.getElementById("sumOfMultiplied").textContent = sums;

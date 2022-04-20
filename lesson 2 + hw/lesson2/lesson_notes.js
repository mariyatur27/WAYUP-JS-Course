// Notes: Do While

let x = 0;

do {
    x++;
    console.log('Hello World');
} while (x <= 15)

// Notes: Objects

const carBmw = {
    model: "BMW",
    country: "Germany",
    year: 2010,
    color: "Red"
}

console.log(carBmw.country); //Gets the country of the car
console.log(carBmw.year); //Gets the year

const carLada = {
    model: "Kalina",
    country: "Ukraine",
    year: 2005,
    color: "black"
}

const yearBmw = carBmw.year;
const yearLada = carLada.year;

//Changin the property of the object

carLada.year = 2020;

//Adding another key
carLada.passengers = 4;

//Arrays
const colors = []
 
//Functions
//Function Type 1
function armyDecisions(name, age){
    if (age > 18) {
        console.log(name + " will join the army");
    }else{
        console.log(name + " will not join the amry");
    }
}

armyDecisions("Alex", 19);
armyDecisions("Anna", 28);
armyDecisions("Oleg", 15);

//Function Type 2
const showMessage = () => {
    console.log("This is a message from a function")
}

showMessage();
let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    steps: 0
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    steps: 0
};

let chimpanzee = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    steps: 0
};

let beagle = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    steps: 0
};

let tardigrade = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    steps: 0
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let astronauts = [superChimpOne, salamander, chimpanzee, beagle, tardigrade];

let idArray = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < astronauts.length; i++) {

      if (!idArray.includes(astronauts[i].astronautID)) {
        astronauts[i].astronautID = idArray[i];
      }
    
    

}
// Add a move method to generate random number of steps to move each animal. Values can be between and include 0 through 10.

for (let i = 0; i < astronauts.length; i++) {
    
    astronauts[i].move = function() { return stepsToMove = Math.round(Math.random()*10);}
}


function crewReports(animal) {
     
    return `\n${animal.name} is a ${animal.species}. They are ${animal.age} years old and has a mass of ${animal.mass} kg. Their ID is ${animal.astronautID}.`;
}

function fitnessTest(crew) {

    let firstPlace = '';
    

    for (let i = 0; i < crew.length; i++) {

        crew[i].steps = crew[i].move();
        console.log(crew[i].steps);
     }
     
     let j = 0;

     while (crew[j].steps < 20) {

        crew[j].steps += crew[j].move();
        j++;
     }
    //     firstPlaceSteps[j] = crew[j].steps;
    //  }
    //  firstPlace = crew[j].name;
    //  console.log(crew);
    //  return firstPlace;
    return crew[j].name;
    }
    
  




// Print out the relevant information about each animal.

// for (let i = 0; i < astronauts.length; i++) {
//     console.log(astronauts[i]);
// }
// Start an animal race!

//console.log(crewReports(astronauts[0]));
console.log(fitnessTest(astronauts));
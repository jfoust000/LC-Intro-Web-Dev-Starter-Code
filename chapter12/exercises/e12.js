let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5
};

let chimpanzee = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6
};

let beagle = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5
};

let tardigrade = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let astronauts = [superChimpOne, salamander, chimpanzee, beagle, tardigrade];

let idArray = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < astronauts.length; i++) {

      if (!idArray.includes(astronauts[i].astronautID)) {
        astronauts[i].astronautID = Math.floor(Math.random() * (10 - 1 + 1) + 1);
      }
    
    

}
// Add a move method to generate random number of steps to move each animal. Values can be between and include 0 through 10.

for (let i = 0; i < astronauts.length; i++) {
    
    astronauts[i].move = function() { return stepsToMove = Math.round(Math.random()*10);}
}



// Print out the relevant information about each animal.

for (let i = 0; i < astronauts.length; i++) {
    console.log(astronauts[i]);
}
// Start an animal race!


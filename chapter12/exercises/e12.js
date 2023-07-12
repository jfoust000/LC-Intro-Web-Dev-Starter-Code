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

for (let i = 1; i <= astronauts.length; i++) {
    astronauts[i-1].astronautID = i;
}

// Print out the relevant information about each animal.

for (let i = 0; i < astronauts.length; i++) {
    console.log(astronauts[i]);
}
// Start an animal race!
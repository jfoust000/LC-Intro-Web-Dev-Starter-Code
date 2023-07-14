let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    steps: 0,
    stepsToMove: 0,
    move:  function() { return this.stepsToMove = Math.round(Math.random()*10);}
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    steps: 0,
    stepsToMove: 0,
    move:  function() { return this.stepsToMove = Math.round(Math.random()*10);}
};

let chimpanzee = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    steps: 0,
    stepsToMove: 0,
    move:  function() { return this.stepsToMove = Math.round(Math.random()*10);}
};

let beagle = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    steps: 0,
    stepsToMove: 0,
    move:  function() { return this.stepsToMove = Math.round(Math.random()*10);}
};

let tardigrade = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    steps: 0,
    stepsToMove: 0,
    move:  function() { return this.stepsToMove = Math.round(Math.random()*10);}
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

function crewReports(animal) {
     
    return `\nAnimal Report:\n\n${animal.name} is a ${animal.species}. They are ${animal.age} years old and has a mass of ${animal.mass} kg. Their ID is ${animal.astronautID}.`;
}

function fitnessTest(crew) {

    let numOfSteps = 0; //total steps the winner took to win
    let winner = ''; //the winner's name
    let breakout = false; //if the winner has reached 20 steps or more, break out of while loop.

        //have all animals do a first move. should be no more than 10 steps each
        for (let i = 0; i < crew.length; i++) {

            crew[i].steps += crew[i].move();
            
        }
        //now, have animals each make another move, but check after each one makes a move to see if they reached 20 steps or more. If they did, break out of the for loop and the while loop with breakout set to true.
        while (numOfSteps < 20) {

            if (breakout === false) {
            
                for (let i = 0; i < crew.length; i++) {
                    
                    crew[i].steps += crew[i].move();

                    if (crew[i].steps >= 20) {
                        winner = crew[i].name;
                        numOfSteps = crew[i].steps;
                        breakout = true;
                        break;
                    } 
                 
                }
               
             } else {

                break;
             }
                 
            numOfSteps++;
                
        }
        
        return  `\nFitness Test:\n\n${winner} won the race with ${numOfSteps - 1} steps! Here are all of crew's steps:\n\n}`;
        
    }
    


console.log(crewReports(astronauts[0]));
console.log(fitnessTest(astronauts));
console.log(astronauts);

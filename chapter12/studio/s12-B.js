// 12.8.3. Bonus Missions

// Code your crewMass function here:

function crewMass(crew) {
  let totalCrewMass = 0;
  for (let i = 0; i < crew.length; i++) {
    totalCrewMass += crew[i].mass;
  }
  
  return Math.round(totalCrewMass * 10) / 10;
}

// Code your fuelRequired function here:
function fuelRequired(crew) {

  let totalCrewMass = crewMass(crew);
  let rocketAndSupplyMass = 75000;

  let totalMass = rocketAndSupplyMass + totalCrewMass;
  let fuelPerKgOfMass = 9.5;

  let totalFuelRequired = fuelPerKgOfMass * totalMass;

  for (let i = 0; i < crew.length; i++) { 

    if (crew[i].species === 'dog' || crew[i].species === 'cat') {
        totalFuelRequired += 200;
    } else {
        totalFuelRequired += 100;
  }
}
return `The mission has a launch mass of ${totalMass} kg and requires ${Math.ceil(totalFuelRequired)} kg of fuel.`;
  
  
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
  };
  let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
  };
  let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
  };
  let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
  };
  let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
  };
  let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
  };
  
  let crew = [candidateB,candidateD,candidateF];

  
  console.log(fuelRequired(crew));
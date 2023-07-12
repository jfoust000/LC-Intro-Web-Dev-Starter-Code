// 12.8.1. Select the Crew

// Code your selectRandomEntry function here:

function selectRandomEntry(entry) {
  return entry[Math.floor(Math.random() * entry.length)];
}

function getThreeRandomIDNumbers() {

let newArray = [];

let idNumbers = [291, 414, 503, 599, 796, 890];


for (let i = 0; i < 3; i++) {

  let selection = selectRandomEntry(idNumbers);

  while (newArray.includes(selection)) {
      selection = selectRandomEntry(idNumbers);
  }
  
    newArray.push(selection);
    
}
return newArray;
}



// Code your buildCrewArray function here:

function buildCrewArray(randomIDNumbers, candidates) {
 
    let winners = [];

    for (let i = 0; i < candidates.length; i++) {  
       
      for (let j = 0; j < 3; j++) {

        if (candidates[i].astronautID === randomIDNumbers[j]) { 
            winners.push(candidates[i].name);
        } 
        
      }
      
}
return winners;
}


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
let selectCandidateWinners = buildCrewArray(getThreeRandomIDNumbers(), animals);

console.log(selectCandidateWinners[0] + '\, ' + selectCandidateWinners[1]+', ' + "and " + selectCandidateWinners[2] + "are going to space!");
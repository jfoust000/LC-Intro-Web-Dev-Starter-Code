// 12.8.2. Orbit Calculations

// Code your orbitCircumference function here:

function orbitCircumference(orbitRadius){
  return Math.round(2*Math.PI*orbitRadius);
}

// Code your missionDuration function here:


function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000){
  
  //time = distance/speed
  let distance = orbitsCompleted * orbitCircumference(orbitRadius);
  let time = orbitsCompleted * (orbitCircumference(orbitRadius) / orbitalSpeed);

  console.log(`\nThe mission will require traveling ${distance} km around the planet, and it will take ${Math.round(time * 100) /100} hours to complete.\n`);

  return (Math.round(time * 100) / 100);

}



// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(entry) {
  return entry[Math.floor(Math.random() * entry.length)];
}

// Code your oxygenExpended function here:

function oxygenExpended(crewMember, orbitRadius, orbitalSpeed){
  
  let spaceWalkTime = missionDuration(3, orbitRadius, orbitalSpeed);
  let crewMemberO2Used = Math.round(crewMember.o2Used(spaceWalkTime)*1000) / 1000;

  return  `\n${crewMember.name} will perform the spacewalk, which will last ${spaceWalkTime} hours and require ${crewMemberO2Used} kg of oxygen.`;


}

// Candidate data & crew array.
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
  
  let crew = [candidateA,candidateC,candidateE];
  
  console.log(missionDuration(5));
  console.log(oxygenExpended(selectRandomEntry(crew), 25000, 50000));
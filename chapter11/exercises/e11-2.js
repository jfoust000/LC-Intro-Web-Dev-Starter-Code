// 11.10.2. Raid a Shuttle
function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;

let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

let nothingToSeeHere = function (n) {
  
  if (n > 100000) {
    
    n = n - 100001;
    fuelLevel = fuelLevel - n;
    
  } else if (n <= 100000 && n >= 50000) {
    
    fuelLevel = 100001;
    n = 0;
    
  } else if (n < 50000) {
    
    fuelLevel = 100001;
    n = 0;
  }
  
  return n;
};

let iAmTheNight = function (arr) {
  
  let myItems = [];
  
  if (arr.length === 7 && arr.includes('gold')) {
    
      myItems.push(arr.splice(arr.indexOf('gold'),1,'oatmeal'));
    
  }   if  (arr.includes('AE-35 unit')) {
    
          myItems.push(arr.splice(arr.indexOf('AE-35 unit'),1,'paper clips'));
    
  }
  
  return myItems;
  
};

let irs = function (fuelLevel, cargoHold) {
  
  let receipt = "";
  let newItems = [];
  
  newItems = iAmTheNight(cargoHold);
  
  receipt = `\nRaided ${nothingToSeeHere(fuelLevel)} kg of fuel from tanks, and stole ${newItems[0]} and ${newItems[1]} from the cargo hold.`;
  
  return receipt;
  
};

console.log(irs(fuelLevel, cargoHold));
  
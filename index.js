// Code your solution in this file
function findMatching(array, str) {
  let matchArr = [];
  
  for (let i = 0; i < array.length; i++) {
     if (array[i].toLowerCase() === str.toLowerCase()) {
       newArray.push(array[i]);
    }
  }
  return matchArr;
}

function fuzzyMatch(array, str) {
  let fuzzArr = [];
  
  for (const name of array) {
    if (name.toLowerCase().slice(0, str.length) === str.toLowerCase()) {
      array.push(name);
    }
  }
  return fuzzArr;
}

function matchName(array, str) {
  let nameArr = [];
   
  for (const driver of array) {
    if (driver.name.toLowerCase() === str.toLowerCase() ) {
       array.push(driver);
    }
  }
  return nameArr;
}
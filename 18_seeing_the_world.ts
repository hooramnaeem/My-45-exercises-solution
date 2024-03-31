// storing the locations in a array not in alphabeticall order
let locations:string[]=['china','pakistan','qatar','japan',];

// printing in original order
console.log('Original ='+ locations);

// printing array in alphabetical order without modifying original
console.log("Copy = " + [...locations].sort());

// printing original
console.log("Original = " + locations);

// printing in reverse alphabetical order
console.log('copy = ' +[...locations].sort().reverse());

// printing original 
console.log ("original = " +locations);

// printing original array
console.log("OriginL = " + locations.reverse());

// reverse the order of the list again to show that list is back to its origanal order
console.log("Original = " + locations.reverse());

// sorting  to change array so its stored in revers alphatical order,print to show that order has been changed
console.log("Original = " + locations.sort().reverse());



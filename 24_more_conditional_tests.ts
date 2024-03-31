//  more conditional tests

// equality and inequality test with string
console.log("equality test with string","red"==="red");
console.log("inequality test with string",("red"as string)!="red");

// lower case function
console.log("lower case function test:","TYPE".toLowerCase()==="type");
console.log("lower case function test:","TYPE".toLowerCase()==="TYPE");

// numerical test involving equality enequality,
console.log("equality test with number:",100===100);
console.log("inequality test with number:",(100 as number)!=100);

// GREATER THAN AND LESS THEN TEST
console.log("greater than test: ",100>99);
console.log("less then test:",100<99);

// greater than or equal to
console.log('graeter than or equal to:',11>=10);
console.log('graeter than or equal to:',6>=10);

// lessthan and equal 
console.log("less than and equal to:",5<=5);
console.log("less than and equal to:",5<=4);

// using and ,or operators
console.log("'and' operator test:",5>4 && 5<6);
console.log("'or' operator test:",5<4 || 3<2);

// whether items is in array 
let alphabets:String[]=['A','B','C','D'];
console.log(' "B" included in array :', alphabets.includes('B'));

// whether item is not in array
console.log ('"E"is not included in array:',alphabets.includes('E'));


// storing a person name and adding some white space charactors at biggigning and at ending
// again printing the name by removing that white space characters

let personName:string='   \n\tAdan\t\n   ';
console.log(personName);

const WhitespaceRemoved:string=personName.trim();

console.log(WhitespaceRemoved);

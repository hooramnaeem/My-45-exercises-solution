// write a function that stores information about a car in form of object
// fuction with two parameter,call function with required parameter and an other name-value pair
// print that object that returned to make sure the information was stored correctly

function cars(manufacturer:string,modal:string,...extrafaeture:{[key:string]:any}[]):object{

let car={
    manufacturer,
    modal,
    ...Object.assign({},...extrafaeture)
}
return car;

}
let carinfo=  cars('suzuki','mehran',{color:'white'},{features:['Automatic','solar powered']});
console.log(carinfo);





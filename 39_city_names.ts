// write a function city_names with parameter city and country 
// function return and call function and print a return  value 

function cityNames(city:string,country:string){
    let cityCountry:string=city +' '+country
    
    return cityCountry;
} 

console.log( cityNames('Islamabad,','Pakistan'));
console.log( cityNames('London,','England'));
console.log( cityNames('Dehli,','India'));
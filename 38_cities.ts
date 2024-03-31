// writting a function with two parameters
// calling function two times with default value and at leat once without default value

function describe_city(cityname:string,countryname:string='Pakistan'){
    console.log(cityname+ ' is in '+ countryname+' !');
}
describe_city('Lahore');
describe_city('Karachi');
describe_city('Tehran','Iran');
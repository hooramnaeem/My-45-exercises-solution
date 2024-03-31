// write a function taht acceps array of items a person wants on his sandwich
// function should have one  parameter that collects many items
// it shuold print a summery of sandwich that is being ordered
// calling function three times with diffrent arguments each time

import { it } from "node:test";

function favourite_sandwich(items:string[]){
    console.log('i want '+items+ ' in my sandwich!');

}
favourite_sandwich(['chicken','garlic mayo',]);

favourite_sandwich(['coleslaw','egg','chees']);

favourite_sandwich(['musturd past','fried chicken','butter']);

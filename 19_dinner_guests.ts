// working with one of the execercise from 14 to 18 print a message indicating the number og people you are inviting to dinner

let guestList:string[]=['huma','uzma','maria'];

// for(let i=0;i<guestList.length; i++){
    // console.log('Dear ' +guestList[i]+ ' I would love to have you at dinner tonight!')
// };
let not_present:string='huma';

let new_guest:string='biya';

guestList[0]=new_guest;

// for(let i=0;i<guestList.length; i++){
//     console.log('Dear ' +guestList[i]+ ' I would love to have you at dinner tonight!')
// };
// console.log('Miss '+not_present + ' is not coming tonight.');
// console.log("'GREAT!' we found a bigger dinner table,so,three more guests are invited.");

guestList.unshift('soha');
guestList.splice(2,0,'nida');
guestList.push('sana');

// for(let i=0;i<guestList.length; i++){
    // console.log('Dear ' +guestList[i]+ ' I would love to have you at dinner tonight!')
// };
// informing guests who are not invited
// console.log("we are sorry to inform you that we can not arrange a big table,so,only two peole are invited now!");

// removing guests from list
while(guestList.length > 2 ){
    let remove_Guest=guestList.pop();
    // console.log('Sorry Miss ' + remove_Guest+', you are not invited for dinner tonight');
};
// informing those who are still invited
// for(let i=0;i<guestList.length; i++){
    // console.log('Dear ' +guestList[i]+ ' you are still invited to dinner tonight!');
// };
// removing remianing gusets to attain empty list
guestList.splice(0,2)
console.log(guestList);

// excersie no 19
// printing a message indicating the number of people invited to dinner
console.log("The number of guests who are invited "+guestList.length);




// starting from ex#16
// remove guests from lists untill two remained
// priting message for those gusets who are not invited now letting them know that they are not invited any more because of less space
// printing a ,essage for those guests who are still invited

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
console.log('Miss '+not_present + ' is not coming tonight.');
console.log("'GREAT!' we found a bigger dinner table,so,three more guests are invited.");

guestList.unshift('soha');
guestList.splice(2,0,'nida');
guestList.push('sana');

for(let i=0;i<guestList.length; i++){
    console.log('Dear ' +guestList[i]+ ' I would love to have you at dinner tonight!')
};
// informing guests who are not invited
console.log("we are sorry to inform you that we can not arrange a big table,so,only two peole are invited now!");

// removing guests from list
while(guestList.length > 2 ){
    let remove_Guest=guestList.pop();
    console.log('Sorry Miss ' + remove_Guest+', you are not invited for dinner tonight');
};
// informing those who are still invited
for(let i=0;i<guestList.length; i++){
    console.log('Dear ' +guestList[i]+ ' you are still invited to dinner tonight!');
};
// removing remianing gusets to attain empty list
guestList.splice(0,2)
console.log(guestList);



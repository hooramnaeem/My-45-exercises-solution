// starting from previuos exercise that a guest invited is not coming so we have to invit some one else ,replace the person previously invited
// sending a new set of invititions


let guestList:string[]=['huma','uzma','maria'];

for(let i=0;i<guestList.length; i++){
    console.log('Dear ' +guestList[i]+ ' I would love to have you at dinner tonight!')
};
let not_present:string='huma';

let new_guest:string='biya';

guestList[0]=new_guest;

for(let i=0;i<guestList.length; i++){
    console.log('Dear ' +guestList[i]+ ' I would love to have you at dinner tonight!')
};
console.log('Miss '+not_present + ' is not coming tonight.');


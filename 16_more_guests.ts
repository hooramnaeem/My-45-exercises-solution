// starting from ex#15 adding more guests to our list ,bcz we find a bigger dinner table printing new set of invitation


let guestList:string[]=['huma','uzma','maria'];

// for(let i=0;i<guestList.length; i++){
    // console.log('Dear ' +guestList[i]+ ' I would love to have you at dinner tonight!')
// };
let not_present:string='huma';

let new_guest:string='biya';

guestList[0]=new_guest;

for(let i=0;i<guestList.length; i++){
    console.log('Dear ' +guestList[i]+ ' I would love to have you at dinner tonight!')
};
console.log('Miss '+not_present + ' is not coming tonight.');
console.log("'GREAT!' we found a bigger dinner table,so,three more guests are invited.");

guestList.unshift('soha');
guestList.splice(2,0,'nida');
guestList.push('sana');

for(let i=0;i<guestList.length; i++){
    console.log('Dear ' +guestList[i]+ ' I would love to have you at dinner tonight!')
};













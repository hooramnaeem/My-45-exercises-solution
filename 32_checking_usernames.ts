// writting a program for checking new and existing users

// making an array of current users
let current_users:string[]=['jack','milli','fia','alex','ali'];

let new_users:string[]=['tim','ria','sana','alex','ali'];

new_users.forEach(newnames => {
    let lowerCase:string=newnames.toLowerCase();

if(current_users.map(current_users=> current_users.toLowerCase()).includes(lowerCase)){

    console.log('The username  '+newnames+ ' is not available.please write an other username.');
}
else{
    console.log('The user name '+newnames+ ' is available.');
}})
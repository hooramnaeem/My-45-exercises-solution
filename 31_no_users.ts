// add an if test to ex#30 to make sure that list of uses is not empty
// if list is empty ,print the message that we need some users
// remove all the user names from array and print correct message

let user_name:string[]=['admin','ali','adan','awan','naeem'];

if (user_name.length===0){
    console.log("we need to find some users!");
}
else{
    user_name=[];
    console.log('All of the users are removed  '+ user_name.length);
}




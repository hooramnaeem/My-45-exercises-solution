// making an array of five users name including admin too
// printing a greeting text for each user with an special message for admin
const user_name:string[]=['ADMIN','ali','adan','awan','naeem'];

for(let i=0; i<user_name.length; i++){
    if(user_name[i]==='ADMIN'){

        console.log('Hellow ADMIN,would you like to check status report?')
    }

    else{console.log("Hellow! "+user_name[i]+" thank you for logging in again.")}
    
}




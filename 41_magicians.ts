// make an array of magicians names,pass the array to a function called show_magicians,which prints the names of each magicians in the array
 let magicians:string[]=['Samri','Hamoon','Herry poter','Debora'];

function show_magicians(magicians:string[]){
    magicians.forEach(person =>{
             console.log(person);
    });
}
show_magicians(magicians);



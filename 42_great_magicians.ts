// starting with a copy of progrm in ex#39,
// creating a function make_graet
// print great before names of every magicians

let magicians:string[]=['samri','hamoon','herry poter']
    
function make_graet(magicArray:string[]){
    for(let i=0; i<magicArray.length; i++)
    
    magicians[i]='The great '+ magicArray[i]
}

function show_magicians(magicians:string[]){
    magicians.forEach(person =>{
             console.log(person);
    });
}
make_graet(magicians);
show_magicians(magicians);


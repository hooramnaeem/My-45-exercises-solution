// 
// 

let magician:string[]=['Samri','Hamoon','Herry potter'];
function copyArray(array:string[]){
    return[...array]
}
function make_great(magicArray:string[]){

    for(let i=0;i<magicArray.length;i++){

        magician[i]='The graet '+magicArray[i]
    }
}
function show_magicians(magicians:string[]){
    magicians.forEach(person =>{
             console.log(person);
    });
}

let copymagicArray=copyArray(magician);

make_great(copymagicArray);

console.log('copy of array!')
show_magicians(copymagicArray);

console.log('original array!')
show_magicians(magician);




// storing number frm 1 to 9 in an array
// loop the array
// using if else chain insid the loop to print proper ordinal ending for each number
// each number should be printed in a seprate line
let ordinal_number:number[]=[1,2,3,4,5,6,7,8,9];
for(let number of ordinal_number){
    let ordinal_ending:string;
    if(number===1)
    {ordinal_ending='st';
    }

    else if(number===2)
    {ordinal_ending='nd';
    }

    else if(number===3)
    
    {ordinal_ending='rd';
     }
     else
     {
        ordinal_ending='th';
     }
     console.log(number+ordinal_ending);
}




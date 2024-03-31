// writting an if else chain for alien color
// if alien is green,print a message that player just earned 5 points
let alien_color:string='green';
// version #01
 
 if (alien_color==='green'){
    console.log("player just earned 5 points!");
 }
 else if(alien_color==='yellow'){
    console.log("player just earned 10 points!");
 }
 else if(alien_color==='red'){
    console.log("player just earned 15 points!");
 }
 else{console.log("please select right color!");}
 
 // version #02
  alien_color='yellow';
 if (alien_color==='green'){
    console.log("player just earned 5 points!");
 }
 else if(alien_color==='yellow'){
    console.log("player just earned 10 points!");
 }
 else if(alien_color==='red'){
    console.log("player just earned 15 points!");
 }
 else{console.log("please select right color!");}

 // version #03
  alien_color='red';
 if (alien_color==='green'){
    console.log("player just earned 5 points!");
 }
 else if(alien_color==='yellow'){
    console.log("player just earned 10 points!");
 }
 else if(alien_color==='red'){
    console.log("player just earned 15 points!");
 }
 else{console.log("please select right color!");}
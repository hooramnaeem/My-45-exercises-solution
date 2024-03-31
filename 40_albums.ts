// write a function make_album with two parameters artist name and album title 
// use that function to make three directries representing diffrent albums
//write an other optional parameter of tracks 
// return a value in form of object which are storing information correctly

import { title } from "process";

function make_album(artistname:string,albumtitle:string,tracks?:number){
let album:{artistname:string,albumtitle:string,tracks?:number}={
        artistname:artistname,
        albumtitle:albumtitle
    
        
    }
    if (tracks!==undefined ){
        album.tracks=tracks;
    }
    
    return album;
}
 let album1=(make_album('Atif aslam','Adat'));
console.log(album1);

let album2=( make_album('Farhan saeed','Sajni'));
console.log(album2);

 let album3=(make_album('Arif lohar','Jugni',12));
console.log(album3);
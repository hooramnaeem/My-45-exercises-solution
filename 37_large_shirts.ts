// modifying the make_shirt from ex# 36 and with a default size large with message on it 
// making shirt with default message and a shirt with differet message

function make_shirt(size:string='large',text:string='i love typescript!'){
    console.log("making a shirt of size "+size+' printing '+text + ' on it.');
}
make_shirt();
make_shirt('meduim');
make_shirt('small','java');




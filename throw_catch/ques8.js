//QUESTION:8
//Write a program that calls a function inside try and catches the error if the function fails.

function test(){
    throw ("Function failed");
}
function callFunction(){
    try{
        return test (); 
    }
    catch(error){
        return error;
    }
}

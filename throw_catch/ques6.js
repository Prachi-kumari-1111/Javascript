//Question:-6

// Write a program that checks if an age is below 18 and throws an error if the user is not eligible.

function checkAge(age){
    try{
        if(age < 18){
            throw ("Not eligible");
        }
        return "Eligible";
    }
    catch(error){
        return error;
    }
}

//Function call
console.log(checkAge(20));
console.log(checkAge(16));
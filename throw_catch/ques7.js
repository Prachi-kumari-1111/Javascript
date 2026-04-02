//Question-7

// Write a program that reads a value from the user and throws an error if it is negative.

function checkValue(value){
    try{
        if(value < 0){
            throw ("Negative value not allowed");
        }
        return value;
    }
    catch(error){
        return error;
    }
}

//Function call
console.log(checkValue(5));
console.log(checkValue(-2));
// QUESTION-3

// Write a program that checks whether a number is valid.
// If not,show an error message using catch

function checkNumber(num){
    try{
        if(typeof num !== "number"){
            throw ("Not a number type");
        }
        return num;
    }
    catch(error){
        return error;
    }
}

//call function
console.log(checkNumber(10));
console.log(checkNumber("abc")); //error
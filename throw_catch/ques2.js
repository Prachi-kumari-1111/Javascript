// QUESTION:2

// Write a program that divides two numbers and handles the error
//  if the second number is 0.

function divide(a , b){
    try{
        if(b === 0){
            throw ("Cannot divide by zero");
        }
        return a / b;
    } 
catch(error){
    return error;
}
}

//call function
console.log(divide(10,2));
console.log(divide(10,0));


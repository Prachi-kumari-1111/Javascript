// Question:5

// Write a program that converts a string to a number and throws an error if the result is NaN.

function convertToNumber(str){
    try{
        let num = Number(str);
        if(isNaN(num)){
            throw("Not a Number");
        }
    return num;
}
catch (error){
    return error;
}
}

//Function call
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));
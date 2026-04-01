// QUESTION:1

// Write a program that asks the user for a name and throws an error if the name is empty.

function checkName(name){
    try {
        if(name === ""){
            throw ("Name cannot be empty");
        }
        return "Hello" + name; 
    }
    catch (error) {
        return error;
    }
}

//Function call 
console.log (checkName (" Prachi "));
console.log(checkName(" "));

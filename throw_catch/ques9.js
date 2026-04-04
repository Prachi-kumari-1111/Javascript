//QUESTION-9

// Write a program that checks if a password is less than 6 characters and shows an error.

function checkPassword(password){
    try{
        if (password. length < 6){
            throw "Error: Password must be atleast 6 characters long";

        }
        console.log("password is valid");
    }
    catch (error){
        console.log(error);
    }
}

//call function
// checkPassword("");
checkPassword("abcdef");
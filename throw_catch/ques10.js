// Question-10

// Write a program that simulates login and throws an error if the username or password is wrong.

function login (username, password){
    const correctUsername = "admin";
    const correctPassword = "12345";

try {
    if (username !== correctUsername || password !== correctPassword){
        throw "Error : Invalid username or password";
    }
    console.log("Login Sucessful");
}
catch (error){
    console.log(error);
}
}

//Call function
login("admin","12345");
login("user","12345");
login("admin","00000");

// Handling Invalid Number Conversion
// Context:

// User input may not always be a valid number. Handling invalid input gracefully is an important aspect of robust programming.
// Task:

// Create a function named convertToNumber(input) that:


// Accepts a single parameter, input, which is expected to be a string.


// Uses a try block to convert the string into a number (using a method such as Number() or parseFloat()).


// Checks if the conversion results in a valid number. If not, throw an error with the message "Invalid number input!".


// Uses a catch block to catch the error and log the error message.


// If the conversion is successful, log or return the numeric value.


function convertToNumber(input) {
    try {
const number = Number(input);
if (isNaN(number)) {
            throw new Error("Invalid number input!");
        }
return number;} 
    catch (error) {
       console.error("Error:", error.message);
    }
}

// Example usage:
console.log(convertToNumber("42")); // Output: 42
convertToNumber("hello"); // Logs: Error: Invalid number input!














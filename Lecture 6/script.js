function divideNumbers(a, b) {

    try {

        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        const result = a / b; //const isliye use karege kyuki isme result fix rahta hai 
        console.log(result);
        return result;
    } 
    catch (error) {
        console.error("Error:", error.message);
    }
}


divideNumbers(10, 2); // Output: 5
divideNumbers(10, 0); // Output: Error:Cannot divide by zero!

const fs = require('fs');

function readFileContent(filename) {
    try {
       
        const content = fs.readFileSync(filename, 'utf8');
        
        
        return content;
    } catch (error) {
       
        console.error("Error: Unable to read the file!");
    }
}
console.log(readFileContent('example.txt')); 
readFileContent('nonexistent.txt'); 

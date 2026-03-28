// for(let i=1;i<=5;i++){
//    console.log("My name is prachi"); //execute 5 times
// }

//calculate sum of 1 to 5
// let sum = 0;
// let n =100
// for(let i=1; i<=n; i++){
// sum=sum+i;
// }
// console.log("sum = ",sum);


//print 1 to 5
// for(let i=1;i<=5;i++){
//     console.log("i= ", i);
// }
// console.log (i);

//while loop
// let i = 1;
// while(i <= 10){
// console.log("i= ", i );
// i++;
// }

//do while loop
// let i =1;
// do{
//     console.log("i= ",i);
//     i++;
// }while(i<=5);

//for-of loop
// let str = "JavaScript";
// let size=0;
// for(let val of str){
//     console.log("val =",val);
//     size++;
// }
// console.log("stringsize=",size);

//for-in loop
// let student = {
//     name : "Rahul Kumar",
//     age : "21",
//     cgpa: "7.5",
//     ispass:true,
// };
// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }



//PRACTICE QUESTIONS:-

//Ques:-print all number from 0 to 100?
// for(i=0;i<=100;i++){
//     if(i%2===0){
//     console.log("i = ", i);
// }
// }


//Ques:-Create a game where you start with any random game number.
// Ask the user to keep guessing the game number until the user enters the correct value.

let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while (userNum != gameNum) {
    userNum = prompt("You entered wrong number. Guess again : ");
}

console.log("congratulations, you entered the right number");

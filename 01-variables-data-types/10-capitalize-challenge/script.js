// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

let myNewString;
//Solution:Giải pháp
// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1); //Output: Developer
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);//Output: Developer
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;//Output: Developer

console.log(myNewString);

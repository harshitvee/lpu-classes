// objectives

// functions declaration
// functions expression
// arrow funcions

// functions declaration
// function printHello(firstName, lastName) {
//     return `hello ${firstName} ${lastName}`;
// }

// var let const

// we can store function inside my variable
// we can store anything inside javascript variable

// const printHello = function (firstName, lastName) {
//     return `Hello ${firstName} ${lastName}`;
// };

// const ans = printHello("john", "doe");
// console.log(ans);

// nested functions

// lexical scope
// let myVal = "Myval";
// function App() {
//     function func2() {
//         const myVal = "myval3";
//         function innerFunc() {
//             const myVal = "myval2";
//             console.log(myVal);
//         }
//         console.log(myVal);
//         innerFunc();
//     }
//     console.log("Inside App");
//     func2();
// }

// App();

// arrow function

// functions declaration
// function greeting(firstName, lastName) {
//     return `hello ${firstName} ${lastName}`;
// }
// function greeting(firstName, lastName) {
//     return `hello ${firstName} ${lastName}`;
// }

// function expression
// const greeting = function (firstName, lastName) {
//     return `hello ${firstName} ${lastName}`;
// };

// const ans = greeting("john", "doe");
// console.log(ans);

// arrow functions
// const greeting =  (firstName, lastName) => {
//         return `hello ${firstName} ${lastName}`;
//     };

// arrow functions with no parameters
const hello = () => {
    console.log("hello world");
};

// arrow function with 1 input
const greet = (firstName) => {
    return `Hello ${firstName}`;
};
// arrow function with 1 input w/o paranthesis

// Note : you can avoid () if you have 1 and only 1 input
const greet2 = firstName => {
    return `Hello ${firstName}`;
};
// arrow function with 2 input

const greet3 = (firstName, lastName) => {
    return `Hello ${firstName} ${lastName}`;
};
// arrow function with implicit return 
const greet4 = (firstName, lastName) => `Hello ${firstName} ${lastName}`;

const greet5 = (firstName) => `Hello ${firstName}`;

const greet6 = firstName => `Hello ${firstName}`;


// array methods 
// map 
// filter function 

// const usernames = ['Harshit', 'John', 'Mohit'];

// function getFirstChar(item) {
//     return item[0];
// }

// const initials = [];
// for(let username of usernames) {
//     const ans = getFirstChar(username);
//     initials.push(ans)
// }

// console.log(initials);

// using map method 

const usernames = ['Harshit', 'John', 'Mohit'];

// function getFirstChar(item) {
//     return item[0];
// }

// map method take function as an input 
// const initials = usernames.map(getFirstChar);



// const initials = usernames.map(function(item) {
//     return item[0];
// })


// map method with index value
// const initials2 = usernames.map(function(item, index) {
//     console.log(index);
//     return item[0];
// })

// map method with arrow function  ******************* 

const initials3 = usernames.map((item)=>{
    return item[0]
}) 

// map method with arrow functions and implicit return 


const initials4 = usernames.map((item) => item[0]) 


const initials5 = usernames.map(item => item[0]) 

console.log(initials4);
// console.log("Hello world");
// let , const, var

// let firstName = "John";

// firstName = "jane";

// camelCase naming convention

// snake_case naming convention

// rules for naming the varibles
// you cannot start with numbers
// you cannot use special symbols
// you can use _ and $
// you can start with _ and $

// const
// const PI = 3.14;

// we cannot re declare and we cannot reassign
// PI = 3.15;

// string indexing

// const firstName = "               john               ";
// console.log(firstName[44]); // undedefined

// let firstNameTrimmed = firstName.trim();
// console.log(firstNameTrimmed.length);

// console.log(firstName.toCase());

// strings are immutable

// const firstName = "John";
// const age = 18;
// const hobby = "guitar";
// const aboutPerson =
//     firstName + " is " + age + " years old " + ". John hobby is " + hobby;

// const aboutPerson = `${firstName} is ${age} years old.`;

// console.log(aboutPerson);

// null, undefined, 0

// null means nothing for now
// undefined means not exist yet
// 0 means zero

// let firstName = 0;
// console.log(firstName);

// primitives data types
// string
// number
// null
// number

// reference data types

// let firstName = "john";
// let age = 0;
// let num = null;
// let lastName;

// console.log(typeof lastName);

// console.log(5 === 4);

// == check value only
// === check data type and value both

// const age1 = 12;
// const age2 = "12";

// console.log(age1 === age2);

// false values
// ""
// 0
// undefined
// null

// let myVariable = null;

// if (myVariable) {
//     console.log("inside if statement");
// } else {
//     console.log("Inside else block");
// }

// let age = 21;
// let drink = age >= 21 ? "beer" : "soft drink";
// console.log(drink);

// let age = 21;
// let gender = "female";
// let relationshipStatus = "single";

// if (
//     (age >= 21 && gender === "female") ||
//     (age >= 21 && gender === "male" && relationshipStatus !== "single")
// ) {
//     console.log("you are allowed in bar");
// } else {
//     console.log("you are not allowed");
// }

// if (6 > 5) {
//     if (5 > 4) {
//         console.log("inside if");
//     }
// } else if (5 > 4) {
//     console.log("something");
// } else {
//     console.log("final else");
// }

// to add items
// push ---> O(1)
// unshift ---> O(n)

// add something on the last
// push method

// strings are immutable

// arrays are mutable
// artists.push("eddie van der meer");
// ['Arijit Singh', 'eddie van der meer']
// const poppedItem = artists.pop();
// console.log(poppedItem);

// unshift and shift
// artists.unshift("artist");
// console.log(artists);

// to remove items
// pop -- > remove item from the last and return that item
// shift ---> remove item from the beginning and return that item
// const removedItem = artists.shift();
// console.log(removedItem);
// console.log(artists);

// arrays are refernce types

// let artists = ["Arijit Singh", "eddie", "andrew"];
// let artists2 = artists;
// artists.push("maneli jamal");
// console.log(artists);
// console.log(artists2);

// heap memory --- store reference types

// stack memory --- store primitives types

// let fruits = ["apple", "mango"];
// let fruits2 = fruits;

// fruits.push("pineapple")

// how can you clone arrays
// let fruits = ["apple", "mango"];
// let fruits2 = [...fruits];
// console.log(fruits);
// console.log(fruits2);

// const myArray = [1, 2, 3];
// myArray.push(2);
// // myArray = [];
// console.log(myArray);

// stack
// -----------------------------------------
// fruits : x1234
// -----------------------------------------

// heap memory
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// x1234 : ["apple", "mango"];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

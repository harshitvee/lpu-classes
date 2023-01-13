// arrays

// let , var, const

// primitive
// Number,
// string,
// null,
// undefined,
// BigInt,
// Symbol

// let age = 5;
// let age2 = age;
// age++;
// console.log(age, age2);

// ----------------------------------
// age = 6
// age2 = 5
// ---------------------------------

// reference
// objects,
// arrays,
// functions

// const nums1 = [1, 2, 3];
// const nums2 = nums1;

// nums1.push(7);

// console.log(nums1);
// console.log(nums2);

// stack
// -------------------------
// nums1 : n54x1
// nums2 : n54x1
// ---------------------------

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// n54x1 : [1, 2, 3]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const nums = [1, 2, 3];

// console.log(Array.isArray(nums));

// javascript object

// arrays --> ordered collection of data

// objects ---> unordered collection

// const personInfo = {
//     "first name": "John",
//     lastName: "Doe",
//     age: 12,
//     hobbies: ["guitar", "travelling"],
// };

// style guide

// console.log(personInfo.firstName);
// console.log(personInfo["first name"]);
// console.log(personInfo.lastName);

// add new key value pair

// personInfo.height = "175 cm";
// console.log(personInfo);

// const nums1 = [1, 2, 3];

// const nums2 = [...nums1, 4, 5, 6];
// console.log(nums2);

const fruits = ["apple", "mango", "grapes"];

// for loop

// 1

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for of loop

// let output = "";

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// console.log(output);

// for in loop

// for (let index in fruits) {
//     console.log(index);
// }

// iterate object

// const personInfo = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 12,
//     hobbies: ["guitar", "travelling"],
// };

// let key = "firstName";
// console.log(personInfo[key]);

// for (let key in personInfo) {
//     // console.log(key);
//     // dot
//     // []
//     console.log(personInfo[key]);
// }

// my preferences

// arrays
// for of
// for (let i = 0 ; i < array.length; i ++)

// objects
// for in

const key1 = "firstName";
const value1 = "John";

const key2 = "lastName";
const value2 = "Doe";

// const personInfo = {
//     firstName: "John",
//     lastName: "Doe",
// };

// const personInfo = {};
// personInfo[key1] = value1;
// personInfo[key2] = value2;
// console.log(personInfo);

// computed properties
// const personInfo = {
//     [key1]: value1,
//     [key2]: value2,
// };

// console.log(personInfo);

// important interview questions , things imp. to rememeber

// array destructuring

// const names2 = [...names];
// names.push("johny");
// console.log(names, names2);
// name1 = John
// name2 = jane

// const name1 = names[0];
// const name2 = names[1];

// const names = ["John", "Jane"];
// const [name1, name2] = names;

// console.log(name1, name2);

// const obj1 = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
// };

// const obj2 = { ...obj1, key3: "val" };
// console.log(obj1);
// console.log(obj2);

// object destructuring

const musicBand = {
    bandName: "ac/dc",
    famousSong: "thunderstruck",
};

const { bandName, famousSong } = musicBand;

console.log(bandName);
console.log(famousSong);

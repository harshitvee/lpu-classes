// console.log("hello world");


// map function 

// map function 

// const numbers = [1,2,3,4,5];


// numbers.map() ---> array
// map method : input ---> function  

// const squares = numbers.map(function(){}); 
// const squares = numbers.map((items)=>{
//     return items**2;
// }); 

// use implicit return 
// const squares2 = numbers.map((items)=>items**2);


// const numbers = [1,2,3,4,5];

// const evenNumbers = numbers.filter((number)=> {
//     return number % 2 === 0;
// })
// console.log(evenNumbers);


// const names = ['andy', 'abhinav', 'bunny', 'chirag', 'Anubhav'];

// const ans = names.filter(name => name.length > 5);



// console.log(ans);

// const startsWithA = names.filter((name) => {
//     return name[0] === 'a' || name[0] === 'A' ;
// })


// const startsWithA = names.filter((name) => {
//     return name[0].toLowerCase() === 'a';
// })

// console.log(startsWithA);

// filter function 

// callback function of filter function must return boolean

// const filteredArray = numbers.filter((number)=>{
//     if(number % 2 === 0) {
//         return true;
//     }else {
//         return false;
//     }
// })

// const filteredArray = numbers.filter((number)=>{
//     return number % 2 === 0;
// });



// console.log(filteredArray)

// DOM 


// document object model 


// console.dir(document);

// const heading = document.getElementById("heading");
// // console.log(heading.textContent);
// heading.style.backgroundColor = "#444";
// heading.style.color = "#fff"
// heading.style.fontFamily = "sans-serif"
// heading.innerHTML = "<em> This is heading </em>"
// heading.textContent = "text changed"
// console.log(heading.textContent);



const colors = ["blue", 'orange', 'purple', 'lightpink', 'pink', "violet"];

const btn = document.getElementById("changeBgBtn")
const body = document.body;

const colorVal = document.querySelector(".color-value");


const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}


btn.addEventListener("click" , () => {
    const randomColor = generateRandomColor();
    body.style.background = randomColor;
    colorVal.textContent = randomColor;
})
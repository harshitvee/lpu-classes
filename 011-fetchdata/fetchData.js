const URL = "https://jsonplaceholder.typicode.com/posts";

// return : promise
// fetch : get req.

// two ways to consume promise

// 1. .then syntax

// 2 async await (easier to write )

// async await

//1. async function

async function fetchData() {
    const response = await fetch(URL); // promise return
    // console.log(response);
    // response --> data
    // json --> js
    const data = await response.json(); // return promise  // json() --->
    console.log(data);
}

fetchData();

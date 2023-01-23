// async

const URL = "https://jsonplaceholder.typicode.com/posts";
// async function fetchData() {
//     const res = await fetch(URL); // by default : get req
//     console.log(res);
// }

fetch(URL)
    .then((res) => res.json)
    .then((data) => console.log(data));

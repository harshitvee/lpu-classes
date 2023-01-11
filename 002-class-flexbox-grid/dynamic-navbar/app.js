const linkContent = document.querySelector(".link-content");
const homeButton = document.querySelector(".home-btn");
const body = document.body;
console.log(body);
function addShowClass() {
    linkContent.classList.add("show");
}
homeButton.addEventListener("click", addShowClass);

// body.addEventListener("click", (e) => {
//     linkContent.classList.remove("show");
// });

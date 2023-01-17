const clickMeBtn = document.querySelector(".clickMe");
const modalWrapper = document.querySelector(".modal-wrapper");
const crossBtn = document.querySelector(".cross-btn");
console.log(crossBtn);
clickMeBtn.addEventListener("click", () => {
    modalWrapper.classList.add("show");
});

crossBtn.addEventListener("click", () => {
    modalWrapper.classList.remove("show");
});

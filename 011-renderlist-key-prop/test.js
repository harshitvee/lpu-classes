const numbers = [1, 2, 3, 4];

const square = numbers.map((num) => {
    return num ** 2;
});

const todos = ["teach students ", "edit videos ", "learn react "];

const liTodos = todos.map((todo) => {
    return `<li> ${todo} </li>`;
});

console.log(liTodos);

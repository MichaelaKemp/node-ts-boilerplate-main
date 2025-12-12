// import { User } from "./Models/user";
// import { Todo } from "./Models/todo";

import { fetchSingleToDo, fetchSingleUsers } from "./Services/api";

// //main working area

// console.log("Hello, World!");


// const newTodo: Todo = {
//     id: 1,
//     title: "Learn TypeScript",
//     completed: true,
//     userId: 1
// }

// console.log(newTodo);


//simunlate a fetch request to get a single Todo item from the API
const singleTodo = await fetchSingleToDo(1);
console.log(singleTodo);

const singleUser = await fetchSingleUsers(1);
console.log(singleUser);
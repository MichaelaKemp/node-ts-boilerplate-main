//write all my fetch functions here

import { Todo } from "../Models/todo";
import { User } from "../Models/user";

export const fetchSingleUsers = async (id: number) => {
    //fetch single user by id

    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await response.json();

    return data as User;
}

export const fetchSingleToDo = async (id: number) => {
    //fetch single todo by id

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
    const data = await response.json();

    return data as Todo;
};
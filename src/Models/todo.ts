//interface is a contract for a todo item
//it defines the structure of a todo item
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

//needs to exported so it can be used in other files
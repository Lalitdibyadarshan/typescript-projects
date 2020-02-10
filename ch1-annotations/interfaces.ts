interface Todo {
    id: number,
    title: string,
    isDone: boolean,
    summery(): string
}

//interfaces are used in place of long anotations
let todo1: Todo = {
    id: 1,
    title: "Learning",
    isDone: false,
    summery(): string {
        return 'Learn as much as you can'
    },
}

let a = <Todo> {
    id: 1
}





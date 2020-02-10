import  axios from 'axios';

interface Todo {
    id: string,
    title: string,
    completed: boolean
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(res => {
    const todo = <Todo> res.data;

    const ID = todo.id;
    const title = todo.title;
    const comlpeted = todo.completed;

    console.log(`
        This todo with ID ${ID}
        has a title ${title}.
        IS it finished: ${comlpeted}    
    `)
})
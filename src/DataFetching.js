import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'


function DataFetching() {
    const [todos,setTodos] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res =>{
            console.log(res)
            setTodos(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div>
<ul>
 
    {
        todos.map(todo => <li key={todo.id}>{todo.title}</li>)
    }
</ul>
        </div>
    )
}
export default DataFetching;
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Test = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                console.log(res)
                setTodos(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    // const user = useSelector((state) => state.user)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchUsers())
    //     console.log(user)
    // }, [])
    return (

        <>
            <div className='container'>
                <h1>Test</h1>
                <ul>
                    {todos.map((todo) => (

                        <li key={todo.id}>{todo.title}</li>

                    ))
                    }
                </ul>
                {/* {user.loading && <div>Loading... </div>}
                {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
                {!user.loading && user.users.lenght ? (
                    <ul>
                        {user.users.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                ) : null} */}
            </div>


            {/* <SearchContainer /> */}
            {/* <JobsContainer /> */}
        </>
    )
}

export default Test

// const apiGet = () => {
//     fetch(".https://jsonplaceholder.typicode.com/todos")
//         .then((response) => response.json())
//         .then((json) => {
//             setData(json);
//         });
// };
// useEffect(() => {
//     apiGet();
// }, []);

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => console.log(json))

// export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
//     return axios
//         .get("../Data2/data2.json")
//         .then((response) => response.data.map((product) => product.id))
//     // console.log(data)
// })

import { Link } from 'react-router-dom';
import React, { useEffect , useState } from 'react';
 import axios from "axios";
import '../Styles/ProductListPage.css';

// const products = [
//         {id :1 , name : "car" , opis:"osobowy ten samochód jest"},
//         {id :2 , name : "bike" , opis:"rower ten osobisty jest" },
//         {id :3 , name : "motorcycle" , opis: "notor ten mój jest "},
//     ];

function ProductListPage  (props)  {
  const [state, setState] = useState([]);
  useEffect(() => {
    //  function fetchProducts (){
      axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(res => setState(res))
            

    //    const res = axios.get(todos)
    // console.log(res)
    //  setTodos(res.todos)
      // {
    //   console.log(res.data)
    //   setProducts(res.data)
    // }
  //  }
// }
  // fetchProducts();
},[])
      

  //  const List = todos.map((todo) => (
  //  <li key={todo.id}> {todo.name}
  //  {/* <Link to={`/todos/${product.name}`}>{product.name}</Link>  */}
  //  </li>
  //  ))
  
  return (
<>
         
        {state.products.map(s =>   <li key={s.id}>{s.title}</li> )}
                          
                          </>


  )
      
}

export default ProductListPage;

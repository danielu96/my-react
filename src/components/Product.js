
   import React, { useEffect , useState } from 'react';
   import '../Styles/Product.css';
    import axios from "axios";
   import { useParams  } from 'react-router-dom';
   
//    const products = [
//     {id :1 , name : "car" , opis:"osobowy ten samochód jest"},
//     {id :2 , name : "bike" , opis:"rower ten osobisty jest" },
//     {id :3 , name : "motorcycle" , opis: "notor ten mój jest "},
// ];
   
   const Product = (props) => { 
      // const {id} = useParams();
    //  const [products, setProducts] = useState([]);
    // useEffect(() => {
    //  axios.get('../Data/data.json')
    //   .then(res =>{
    //     console.log(res)
    //     setProducts(res.data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    //         }, [])
        
         return (
          // { products.map(product => (
          //    <div key={product.id} > 
          //    <p> {product.opis}</p>
          //    <p>{product.img}</p>
          //    </div>
          //    )) }

       <div className= "App">
        {props.id}{props.opis}
        {/* {products.map(product => (
          <li key={product.id}>{product.name}</li>

          ))}  */}
        
   </div> 
     );
        }
        
   export default Product;
   
  
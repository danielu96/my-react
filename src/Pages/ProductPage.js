import React from 'react';
import { Link  ,  useParams} from 'react-router-dom';
import Product from '../components/Product'

const ProductPage = ({products}) => {
  const {id} = useParams();
  
  return (
    <>
      <div><h1>Nazwa Produktu : {id}  </h1></div>
      <Product id={id} {...products}/>
      <Link to="/products">Powrót do listy produktów</Link>
      
    </>
  );
}
export default ProductPage;
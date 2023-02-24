import React from 'react'
import styled from 'styled-components'
// import Product from './Product'
import SingleProduct from '../Pages/SingleProduct'
import CartItem from '../Cart/CartItem';
import { useSelector } from 'react-redux';
import CardModal from '../Pages/CardModal';
import Product from '../Pages/Product';


const GridView = ({ products }) => {
    // const { cartItems, amount, total } = useSelector((state) => state.cart);
    return (
        <Wrapper>
            {/* <div className='container'>
                {products.map((item) => {
                    return <CartItem key={item.id}{...item} />;
                })}
            </div> */}
            <div className='products-container'>
                {products.map((item) => {
                    return <Product key={item.id} {...item} />
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
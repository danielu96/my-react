import React from 'react'
import styled from 'styled-components'
// import { Filters, ProductList, Sort, PageHero } from '../components'
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import Sort from '../components/Sort';
const Produkty = () => {
    return (
        <main>
            {/* <PageHero title='products' /> */}
            <Wrapper className='page'>
                <div className='section-center products'>
                    <Filters />
                    <div>
                        <Sort />
                        <ProductList />
                    </div>
                </div>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default Produkty



// import { Link } from 'react-router-dom';
// import Sort from '../components/Sort';
// import Filters from '../components/Filters';
// import { useSelector } from "react-redux";
// import { Load_Products, SortProducts, filterProducts, sort, filters, fetchProducts } from '../Slices/productSlice';
// import React, { useEffect, useState, useReducer } from "react";
// import { useDispatch } from "react-redux";
// import ProductList from '../components/ProductList';
// import productSlice from '../Slices/productSlice';
// // import products from '../components/productsItems';
// // import { fetchProducts } from '../Slices/productSlice';
// // import { UserView } from '../features/user/UserView';
// // import products from './cardItems';

// // const initialState = {
// //     products: [],
// //     all_products: [],
// //     filtered_products: [],
// //     grid_view: true,
// //     isLoading: true,
// //     sort: "price-lowest",
// //     filters: {
// //         text: '',
// //         company: 'all',
// //         category: 'all',
// //         color: 'all',
// //         min_cena: 0,
// //         max_cena: 0,
// //         cena: 0,
// //         shipping: false,
// //     },
// // }


// const Produkty = () => {




//     // const [state, dispatch] = useReducer(productSlice, initialState);
//     // const {
//     //     products,
//     //     grid_view,
//     //     sort,
//     //     updateSort,
//     //     state
//     // } = useSelector((store) => store.product);
//     // const dispatch = useDispatch()
//     // const { filtered_products: products } = useSelector((state) => state.products);


//     // const [state] = useSelector((state) => state.filters)
//     // useEffect(() => {
//     //     dispatch(fetchProducts())
//     //     // console.log(user)
//     // }, [])
//     // useEffect(() => {
//     //     dispatch(Load_Products())
//     //     // console.log(user)
//     // }, [])


//     // const { all_products, filtered_products, tempProducts } = useSelector((state) => state.product);
//     // useEffect(() => {
//     //     dispatch(Load_Products(products));

//     //     console.log(products)
//     // }, [products]);

//     // useEffect(() => {
//     //     dispatch(SortProducts(products))
//     //     dispatch(filterProducts(products))
//     //     console.log(products)
//     // }, [
//     //     state.sort,
//     //     state.filters,
//     //     console.log(products)
//     // ])
//     return (
//         <>

//             <div className='container'>

//                 <Sort />
//                 <Filters />
//                 / <ProductList />
//                 {/* <UserView /> */}


//                 {/* {products.map((product) => {
//                     return (
//                         <article key={product.id}>
//                             <h5>{product.title}</h5>
//                             <p>{product.cena}</p>
//                             <p>{product.availableProducts} dostępne</p>

//                             <Link to={`/Produkty/${product.title}`}>more info</Link>
//                         </article>
//                     );
//                 })} */}
//             </div>
//         </>
//     );

// }

// export default Produkty;
// {/* <Link to={`/Produkty/${product.id}`}>more info</Link> */ }
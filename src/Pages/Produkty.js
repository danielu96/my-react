import { Link } from 'react-router-dom';
import Sort from '../components/Sort';
import Filters from '../components/Filters';
import { useSelector } from "react-redux";
import { Load_Products, SortProducts, filterProducts, sort, filters } from '../Slices/productSlice';
import React, { useEffect, useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import ProductList from '../components/ProductList';
import productSlice from '../Slices/productSlice';
import products from '../components/productsItems';
import { fetchUsers } from '../Slices/productSlice';
import { UserView } from '../features/user/UserView';
// import products from './cardItems';

const initialState = {
    all_products: [],
    filtered_products: [],
    grid_view: true,
    isLoading: true,
    sort: "price-lowest",
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        min_cena: 0,
        max_cena: 0,
        cena: 0,
        shipping: false,
    },
}


const Produkty = () => {




    // const [state, dispatch] = useReducer(productSlice, initialState);
    // const {
    //     products,
    //     grid_view,
    //     sort,
    //     updateSort,
    // } = useSelector((store) => store.products);
    const dispatch = useDispatch()
    // const { filtered_products: products } = useSelector((state) => state.products);


    // const [state] = useSelector((state) => state.filters)
    useEffect(() => {
        dispatch(fetchUsers())
        // console.log(user)
    }, [])



    // const { all_products, filtered_products, tempProducts } = useSelector((state) => state.products);
    // useEffect(() => {
    //     dispatch(Load_Products(products));

    //     console.log(products)
    // }, [products]);

    // useEffect(() => {
    //     dispatch(SortProducts(products))
    //     dispatch(filterProducts(products))
    //     console.log(products)
    // }, [
    //     state.sort,
    //     state.filters,
    //     console.log(products)
    // ])
    return (
        <>

            <div>
                <h1>Some prod</h1>
                {/* <Sort /> */}
                {/* <Filters /> */}
                {/* <ProductList /> */}
                <UserView />
                {/* <h1>PRODUCTS</h1> */}

                {/* {products.map((product) => {
                    return (
                        <article key={product.id}>
                            <h5>{product.title}</h5>
                            <p>{product.cena}</p>
                            <p>{product.availableProducts} dostępne</p>

                            <Link to={`/Produkty/${product.title}`}>more info</Link>
                        </article>
                    );
                })} */}
            </div>
        </>
    );

}

export default Produkty;
{/* <Link to={`/Produkty/${product.id}`}>more info</Link> */ }
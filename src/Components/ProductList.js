// import React from 'react'
import React, { useEffect, useState, useReducer } from "react";
// import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import { fetchProducts } from "../Slices/productSlice";
const ProductList = () => {

    const { products, grid_view, sort, updatesort } = useSelector((store) => store.product);
    // const {
    //     products,
    //     sort
    // } = useSelector((store) => store.product)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
        // console.log(user)
    }, [])

    // useEffect(()=>{
    //     dispatch
    // })
    // const [data, setData] = useState([products]);
    // const apiGet = () => {
    //     fetch("../DATA2/data2.json")
    //         .then((response) => response.json())
    //         .then((json) => {
    //             setData(json);
    //         });
    // };
    // useEffect(() => {
    //     apiGet(products);
    // }, [products]);

    if (products.length < 1) {
        return (
            <h5 style={{ textTransform: 'none' }}>
                Sorry, no products matched your search.
            </h5>
        )
    }

    if (grid_view === false) {
        return <ListView products={products} />
    }
    return <GridView products={products} />
}

export default ProductList
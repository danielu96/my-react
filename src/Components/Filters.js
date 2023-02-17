
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters, clearFilters } from "../Slices/productSlice";
import { getUniqueValues } from '../Utils/helpers';
import "../Styles/Css/Filters.css";
// import cartItems from "../Cart/cartItems";

const Filters = () => {

    const {
        filters: {
            text,
            company,
            category,
            color,
            min_cena,
            max_cena,
            cena,
            shipping,
        },
        // updateFilters,
        // clearFilters,
        all_products,
        FilterProducts,
    } = useSelector((state) => state.products);
    const dispatch = useDispatch()


    const handleUpdateFilters = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name === 'category') {
            value = e.target.textContent
        }
        if (name === 'color') {
            value = e.target.dataset.color
        }
        if (name === 'shipping') {
            value = e.target.checked
        }
        // if (name === 'cena') {
        //     value = Number(value)
        // }

        console.log(name, value)
        dispatch(updateFilters({ name, value }))
    }
    // const handleClearFilters = () => {
    //     dispatch({ clearFilters })
    // }

    const categories = getUniqueValues(all_products, 'category')
    const companies = getUniqueValues(all_products, 'company')
    const colors = getUniqueValues(all_products, 'color')
    // console.log(categories)



    return (<div
        className="content"
    // className="container" style={{ margin: "0 auto 0 auto" }}
    >
        <h4>Filters</h4>
        <form className="form-controlen" style={{ minHeight: "1rem", width: "8rem" }}
            onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                name="text"
                placeholder="search"
                value={text}
                className="search-input"
                onChange={handleUpdateFilters} />

            <div className="form-controlen">
                <h4>Category</h4>
                <div>
                    {categories.map((c, index) => {
                        return <button key={index}
                            onClick={handleUpdateFilters}
                            type='button'
                            name="category"
                            className={`${category === c ? 'active' : null}`}
                        >{c}</button>
                    })}
                </div>
            </div>
            <div className="form-controlen">
                <h5>company</h5>
                <select
                    name="company"
                    value={company}
                    className='company'
                    onChange={handleUpdateFilters}>
                    {companies.map((c, index) => {
                        return (<option key={index} value={c}>
                            {c}
                        </option>)
                    })}
                </select>
            </div>
            <div className="form-controlen">
                <h5>colors</h5>
                <div className="colors">
                    {colors.map((c, index) => {
                        if (c === 'all') {
                            return (
                                <button
                                    key={index}
                                    name='color'
                                    onClick={handleUpdateFilters}
                                    data-color='all'
                                    className={`${color === 'all' ? 'all-btn active' :
                                        'all-btn'}`}> all </button>
                            )
                        } else {
                            return <button
                                key={index}
                                name='color'
                                style={{ background: c }}
                                data-color={c}
                                className={`${color === c ? 'color-btn active' :
                                    'color-btn'}`}
                                onClick={handleUpdateFilters}>
                                {color === c ? <FaCheck /> : null}

                            </button>
                        }
                    })}

                </div>
            </div>
            <div className="price">
                <h5>Price</h5>
                <p>{cena}</p>
                <input type='range' name="cena"
                    min={min_cena} max={max_cena}
                    onChange={handleUpdateFilters}
                    value={cena} />
            </div>
            <div className='form-control shipping' style={{ border: 'none' }}>
                <label htmlFor='shipping'>free shipping</label>
                <input
                    type='checkbox'
                    name='shipping'
                    id='shipping'
                    checked={shipping}
                    onChange={handleUpdateFilters}
                />
            </div>
        </form>
        <button type='button' className='clear-btn'
            // onClick={handleClearFilters}
            onClick={() => {
                dispatch(clearFilters())
            }
            }
        >
            clear filters
        </button>

    </div>);
}

export default Filters;
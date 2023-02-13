import React from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../Slices/productSlice";
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
        },
        // updateFilters,
        // clearFilters,
        all_products,
        FilterProducts,
    } = useSelector((state) => state.products);
    const dispatch = useDispatch()
    const handleUpdateFilters = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'category') {
            let value = e.target.textContent
        }
        // if (name === 'color') {
        //     value = e.target.dataset.color
        // }
        // if (name === 'cena') {
        //     value = Number(value)
        // }

        console.log(name, value)
        dispatch(updateFilters({ name, value }))
    }
    const categories = getUniqueValues(all_products, 'category')
    const companies = getUniqueValues(all_products, 'company')
    const colors = getUniqueValues(all_products, 'color')
    // console.log(categories)
    const clearFilters = () => { }

    return (<div className="container" style={{ margin: "0 auto 0 auto" }}>
        <h4>Filters</h4>
        <form className="item-price" style={{ minHeight: "auto" }}
            onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                name="text"
                placeholder="search"
                value={text}
                className="sort-input"
                onChange={handleUpdateFilters} />
        </form>
        <div>
            <h4>Category</h4>
            <div>
                {categories.map((c, index) => {
                    return <button key={index}
                        onClick={handleUpdateFilters}
                        type='button'
                        name="category"
                    >{c}</button>
                })}
            </div>
        </div>
        <div>
            <h5>company</h5>
            <select
                name="company"
                value={company}
                onChange={handleUpdateFilters}>
                {companies.map((c, index) => {
                    return (<option key={index} value={c}>
                        {c}
                    </option>)
                })}
            </select>
        </div>
        <div>
            <h5>colors</h5>
            <div>
                {colors.map((c, index) => {
                    if (c === 'all') {
                        return (
                            <button
                                key={index}
                                name='color'
                                onClick={handleUpdateFilters}
                                data-color="all">
                                all
                            </button>
                        )
                    }
                    return <button key={index} name='color' data-color={c}
                        onClick={handleUpdateFilters}>
                        {color === c ? <FaCheck /> : null}
                    </button>
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
    </div>);
}

export default Filters;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueValues } from '../Utils/helpers'
// import productSlice, { updateFilters, clearFilters } from "../Slices/productSlice";
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
        updateFilters,
        // clearFilters,
        all_products,

    } = useSelector((state) => state.products);
    const dispatch = useDispatch()
    const handleUpdateFilters = (e) => {
        let name = e.target.name
        let value = e.target.value
        console.log(name, value)
        dispatch(updateFilters({ name, value }))
    }
    const categories = getUniqueValues(all_products, 'category')
    const companies = getUniqueValues(all_products, 'company')
    const colors = getUniqueValues(all_products, 'colors')
    console.log(colors)
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
        <h4>Category</h4>
    </div>);
}

export default Filters;
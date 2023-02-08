import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../Cart/cartItems';


const initialState = {
    all_products: cartItems,
    FilterProducts: cartItems,
    sort: "price-lowest",
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        min_cena: 0,
        max_cena: 0,
        cena: 0,
    },
}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

        updateSort: (state, action) => {
            const { sort, FilterProducts } = state;
            let tempProducts = [...FilterProducts]

            if (sort === 'price-lowest') {
                tempProducts = tempProducts.sort((a, b) => b.cena - a.cena)
                console.log("najnizsza wartosc")
            }
            if (sort === 'price-highest') {
                tempProducts = tempProducts.sort((a, b) => a.cena - b.cena)
                console.log("najwyzsza wartaaosc")
            }
            if (sort === 'name-a') {
                tempProducts = tempProducts.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })
                console.log('od a do z ')
            }
            if (sort === 'name-z') {
                tempProducts = tempProducts.sort((a, b) => {
                    return b.title.localeCompare(a.title)
                })
                console.log('od z do a')
            }
            return { ...state, sort: action.payload, FilterProducts: tempProducts }
        },
        updateFilters: (state, action) => {
            const { name, value } = action.payload
            return { ...state, filters: { ...state.filters, [name]: value } }
        },
        clearFilters: () => { },
    }
}
)
export const { sort, updateSort, FilterProducts, updateFilters, clearFilters, text, name } = productsSlice.actions;
export default productsSlice.reducer;
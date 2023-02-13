import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../Cart/cartItems';
// import CartItem from '../Cart/CartItem'


const initialState = {
    all_products: cartItems,
    FilterProducts: cartItems,
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
    },
}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

        Load_Products: (state, action) => {
            let maxCena = action.payload.map((p) => p.cena)
            maxCena = Math.max(...maxCena)
            console.log(maxCena)
            return {
                ...state,
                all_products: [...action.payload],
                FilterProducts: [...action.payload],
                filters: {
                    ...state.filters,
                    max_cena: maxCena, cena: maxCena
                }
            }
        },

        updateFilters: (state, action) => {
            const { name, value } = action.payload
            console.log("filtering ggg")
            return { ...state, filters: { ...state.filters, [name]: value } }
        },

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

        clearFilters: () => { },
    }
}
)
export const { sort, updateSort, FilterProducts, updateFilters, clearFilters, Load_Products } = productsSlice.actions;
export default productsSlice.reducer;
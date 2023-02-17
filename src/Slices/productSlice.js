import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../Cart/cartItems';
// import CartItem from '../Cart/CartItem'


const initialState = {
    all_products: [],
    FilterProducts: [],
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
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

        Load_Products: (state, action) => {
            let maxCena = action.payload.map((p) => p.cena)
            maxCena = Math.max(...maxCena)
            // console.log(maxCena)
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
            console.log("filtering products")
            return { ...state, filters: { ...state.filters, [name]: value } }
        },
        filterProducts: (state, action) => {
            const { all_products } = state
            const { text, category, company, color, cena, shipping } = state.filters
            let tempProducts = [...all_products]
            if (text) {
                tempProducts = tempProducts.filter((product) =>
                    product.title.toLowerCase().startsWith(text)
                )
            }
            if (category !== 'all') {
                tempProducts = tempProducts.filter(
                    (product) => product.category === category
                )
            }
            if (company !== 'all') {
                tempProducts = tempProducts.filter(
                    (product) => product.company === company
                )
            }
            if (color !== 'all') {
                tempProducts = tempProducts.filter((product) => {
                    return product.colors.find((c) => c === color)
                })
            }
            // filter by price
            tempProducts = tempProducts.filter((product) => product.cena <= cena)
            // filter by shipping
            if (shipping) {
                tempProducts = tempProducts.filter((product) => product.shipping === true)
            }
            return { ...state, FilterProducts: tempProducts }

        },
        updateSort: (state, action) => {
            return { ...state, filters: action.payload, sort: action.payload }
        },

        SortProducts: (state, action) => {
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
                    return b.title.localeCompare(a.title)
                })
                console.log('od a do z ')
            }
            if (sort === 'name-z') {
                tempProducts = tempProducts.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })
                console.log('od z do a')
            }
            return { ...state, sort: action.payload, FilterProducts: tempProducts }
        },
        // clearFilters: (state) => {
        //     state.FilterProducts = [];
        // }

        clearFilters: (state) => {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    company: 'all',
                    category: 'all',
                    color: 'all',
                    cena: state.filters.max_cena,
                    shipping: false,
                },
            }

        },
        // throw new Error(`No Matching "${action.type}" - action type`)
    }
}
)
export const { SortProducts, updateSort, FilterProducts, updateFilters, clearFilters, Load_Products, sort } = productsSlice.actions;
export default productsSlice.reducer;
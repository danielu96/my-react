import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartItems from '../Cart/cartItems';
import produce, { current } from 'immer';
// import products from '../components/productsItems';
import axios from 'axios';


// const produce = require('immer').produce

const initialState = {
    // users: [],
    // products: [],
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
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get("../DATA4/data4.json")
        // .get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data)
    // .then(console.log(data))
})


const productSlice = createSlice({
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
                filtered_products: [...action.payload],
                filters: {
                    ...state.filters,
                    max_cena: maxCena, cena: maxCena
                }
            }
            // return produce(state, (draft) => {
            //     draft.filters.cena = action.payload
            // })
            // default:{
            //     return state
            // }
        },
        set_GridView(state, action) {
            return { ...state, grid_view: true }
        },
        set_ListView(state, action) {
            return { ...state, grid_view: false }
        },
        updateSort: (state, action) => {
            console.log(current(state))
            return {
                ...state, sort: action.payload,
                // filtered_products: [...action.payload],
            }

        },

        SortProducts: (state, action) => {
            const { sort, filtered_products } = state;
            // let tempProducts = [];


            if (sort === 'price-lowest') {
                filtered_products.sort((a, b) => a.cena - b.cena)
                console.log("najnizsza wartosc")
            }
            if (sort === 'price-highest') {
                filtered_products.sort((a, b) => b.cena - a.cena)
                console.log("najwyzsza wartaaosc")
            }
            if (sort === 'name-a') {
                filtered_products.sort((a, b) => {
                    return a.title.localeCompare(b.title)

                })
                console.log('od a do z ')
            }
            if (sort === 'name-z') {
                filtered_products.sort((a, b) => {
                    return b.title.localeCompare(a.title)
                })
                console.log('od z do a')
            }
            // return {
            //     ...state,
            //     // sort: action.payload,
            //     // filtered_products: [...action.payload],
            //     filtered_products: tempProducts
            // }
            return produce(state, (draft) => {
                // draft.sort = action.payload,
                draft.sort = action.payload
                console.log(current(draft))
                // filtered_products = tempProducts
            })
        },

        updateFilters: (state, action) => {
            const { name, value } = action.payload
            console.log(value)
            return {
                ...state,
                filters: {
                    ...state.filters, [name]: value,
                    // all_products: action.payload,
                    // filtered_products: action.payload,
                }
            }
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
            return {
                ...state, filtered_products: tempProducts,
                // filtered_products: [...tempProducts]
            }

        },

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
        throw:
            new Error
                ('nie ma nic')
        // (`No Matching 
        // "${action.type}" 
        // - action type`)

    }
}
)
export const { SortProducts, updateSort, filterProducts, updateFilters, clearFilters, Load_Products, sort, filters, tempProducts, filtered_products, set_GridView, set_ListView } = productSlice.actions;
export default productSlice.reducer;
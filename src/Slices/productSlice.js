import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../Cart/cartItems';


const initialState = {
    // cartItems: cartItems,
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
            let tempCartItems = [...FilterProducts]

            if (sort === 'price-lowest') {
                tempCartItems = tempCartItems.sort((a, b) => b.cena - a.cena)
                console.log("najnizsza wartosc")
            }
            if (sort === 'price-highest') {
                tempCartItems = tempCartItems.sort((a, b) => a.cena - b.cena)
                console.log("najwyzsza wartaaosc")
            }
            if (sort === 'name-a') {
                tempCartItems = tempCartItems.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })
                console.log('od a do z ')
            }
            if (sort === 'name-z') {
                tempCartItems = tempCartItems.sort((a, b) => {
                    return b.title.localeCompare(a.title)
                })
                console.log('od z do a')
            }
            return { ...state, sort: action.payload, FilterProducts: tempCartItems }
        }
    }
}
)
export const { sort, updateSort, FilterProducts } = productsSlice.actions;
export default productsSlice.reducer;
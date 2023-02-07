import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../Cart/cartItems';


const initialState = {
    cartItems: cartItems,
    FilterCartItems: cartItems,
    sort: "price-lowest",

}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

        updateSort: (state, action) => {


            const { sort, FilterCartItems } = state;

            let tempCartItems = [...FilterCartItems]

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
            // else
            //     return {
            //         ...tempCartItems
            //     }
            return { ...state, sort: action.payload, FilterCartItems: tempCartItems }
            // { ...state, FilterCartItems: tempCartItems };

        }
    }
}
)



export const { sort, updateSort } = productsSlice.actions;
export default productsSlice.reducer;
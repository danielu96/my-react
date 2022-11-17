import React, { useState, useContekxt, useReducer, } from "react";
const AppContext = ReactContext()
const initialState = {
    total: 0,
    avaliableProducts: 0,
    cena: 0,

}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider
            value={{ ...state }}

        >{children}
        </AppContext.Provider>
    )
}
export default AppContext;
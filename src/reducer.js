const reducer = (state, action) => {
    if (action.type === 'edycja') {
        return { ...state, card: [] }
    }
    return state
}
export default reducer;
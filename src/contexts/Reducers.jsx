export const productReducer = (state , action) => {
    switch (action.type) {
        case "ADD_LIST":
            return {...state, product : [...state.product, {...action.payload}]}
        case "ADD_TO_CART":
            return {...state, cart : [...state.cart, {...action.payload, qty : 1}]}
        case "REMOVE_CART":
            return {...state, cart : cart.filter((element) => element.id !== action.payload.id)}
        default:
            return state;
    }
}
export const productReducer = (state , action) => {
    switch (action.type) {
        case "ADD_LIST":
            return {...state, product : [...state.product, {...action.payload}]}
        case "ADD_TO_CART":
            return {...state, cart : [...state.cart, {...action.payload, qty : 1}], qty : state.qty + 1}
        case "REMOVE_CART":
            return {...state, cart : state.cart.filter((element) => element.id !== action.payload.id)}
        case "ADD_QTY":
            return {
                ...state,
                cart : state.cart.filter((c) => 
                    c.id === action.payload.id ? (c.qty += 1) : c
                ),
                qty : state.qty + 1
            }
        case "DECREMENT_QTY":
            return {
                ...state,
                cart : state.cart.filter((c) => 
                    c.id === action.payload.id ? (c.qty -= 1) : c
                ),
                qty : state.qty - 1
            }
        default:
            return {...state};
    }
}

const cartReducer = (state: any, action: any) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return { ...state, products: action.payload };

        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.payload] }

        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((f: any) => f.id !== action.payload) }

        default:
            return state;
    }
}

export default cartReducer;
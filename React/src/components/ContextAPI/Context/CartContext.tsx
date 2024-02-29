import { useReducer, useContext, createContext, useState, useEffect } from 'react'
import cartReducer from '../Reducer/cartReducer'


const CartContextState = createContext(null);

const CartContext = ({ children }: any) => {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => dispatchCart({ type: "INIT_PRODUCTS", payload: data }))
            .catch((error) => console.log(error))

    }, [])

    const [products, setProducts] = useState([]);
    const [cart, dispatchCart] = useReducer(cartReducer, {
        cart: [],
        products: []
    });

    return (
        <CartContextState.Provider value={{ cart, dispatchCart }}>
            {children}
        </CartContextState.Provider>
    )
}

export const CartState = () => {
    return useContext(CartContextState)
}

export default CartContext;
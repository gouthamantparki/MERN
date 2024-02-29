import { CartState } from "../Context/CartContext"

export const Product = ({ product }: any) => {
    const addToCart = CartState()?.dispatchCart
    return (
        <div>
            <p>{product.title}</p>
            <p><button onClick={() => addToCart({ type: "ADD_TO_CART", payload: product })}> ADD TO CART </button></p>
        </div>
    )
}

import { CartState } from "../Context/CartContext"

export const Cart = () => {

    const cartItems = CartState()?.cart?.cart
    const removeCartItem = CartState()?.dispatchCart

    return (
        <div>
            {cartItems.map((cartItem: any) => {
                return (
                    <>
                        <p>{cartItem.title}</p>
                        <button onClick={() => removeCartItem({ type: "REMOVE_FROM_CART", payload: cartItem.id })}>Remove</button>
                    </>)
            })}
        </div>
    )
}

import { CartState } from "../Context/CartContext"
import { Product } from "../Pages/Product";

export const Products = () => {
    let products = CartState()?.cart?.products;

    return (
        <>
            <div>Products</div>
            <div>
                {products.map((product: any) => {
                    return (<Product product={product} key={product.id} />)
                })}
            </div>
        </>
    )
}

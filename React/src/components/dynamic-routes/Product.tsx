import { Link, useParams } from "react-router-dom"
import Data from "../Data"


export const Product = () => {

    const { id } = useParams()
    let product: any = Data.find((p) => p.id === Number(id))

    return (
        <div>
            <img src={product.image} alt="" height='200' width='200' />
            <h2>Title: {product.title}</h2>
            <p>Description: {product.description}</p>
            <div>
                <p>Price: Rs. {product.price}</p>
                <p>Category: {product.category}</p>
                <p>Rating: {product.rating.rate}</p>
                <p>Count: {product.rating.count}</p>
            </div>
            <Link to={'/products'}>Back</Link>
        </div>
    )
}

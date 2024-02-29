import { useState } from "react"

const Product = (props: any) => {

    const [show, setShow] = useState(false)

    function handleShowDetails() {
        setShow((show) => !show)
    }

    const product = props.product
    return (
        <>
            <div className='product'>
                <div>
                    <p><img src={product.image} height='200' width='200' /></p>
                    <button onClick={handleShowDetails}>Show More...</button>
                </div>
                <div className="product-details">
                    <h3>Title: {product.title}</h3>
                    <p>Description: {product.description}</p>
                    {show && (
                        <div>
                            <p>Price: Rs. {product.price}</p>
                            <p>Category: {product.category}</p>
                            <p>Rating: {product.rating.rate}</p>
                            <p>Count: {product.rating.count}</p>
                        </div>
                    )}
                </div>
            </div>
            <hr />
        </>
    )
}

export default Product
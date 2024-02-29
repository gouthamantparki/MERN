import Data from './Data'
import './products.css'
import Product from './Product'

const Products = () => {
    const data = Data.map((product) => {
        return (
            <Product product={product} key={product.id} />
        )
    })

    return (
        <><div>{data}</div></>
    )
}


export default Products
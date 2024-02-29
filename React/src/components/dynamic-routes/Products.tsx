import { Link } from 'react-router-dom'
import data from '../Data'


export const Products = () => {
    return (
        <div>
            {
                data.map((product) => {
                    return (
                        <div>
                            <img src={product.image} alt="" height='200' width='200' />
                            <h2>Title: {product.title}</h2>
                            <p>Description: {product.description}</p>
                            <Link to={`/Product/${product.id}`} >Show More...</Link>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

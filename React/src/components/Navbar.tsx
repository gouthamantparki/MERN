import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>E-Commerce</h2>
            <ul className="navbar-menu">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={"/products"}>Products</Link></li>
                <li><Link to={"/cart"}>Cart</Link></li>
                <li><Link to={"/users"}>Users</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
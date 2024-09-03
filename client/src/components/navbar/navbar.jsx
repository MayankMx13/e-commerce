import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="left">
                <Link className="home" to="/">Home</Link>
                <Link className='products' to="/products" >Products</Link>
            </div>
            <div className="mid"><img src="/logo.png" alt="" /></div>
            <div className="right">
                <img className='cart' src="/cart.png" alt="" />
                <Link className="contact" to="/contact">Contact</Link>
                <Link className='login' to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Navbar
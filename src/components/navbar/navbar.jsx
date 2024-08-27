import './navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="left"><button className='home'>Home</button>
                <button className='products'>Products</button>
            </div>
            <div className="mid"><img src="/logo.png" alt="" /></div>
            <div className="right"><img className='cart' src="/cart.png" alt="" />
                <button className='contact'>Contact</button>
            </div>
        </div>
    )
}

export default Navbar
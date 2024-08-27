import './hero.scss'
import { Link } from 'react-router-dom'


function Hero() {
    return (
        <div className='hero'>
            <div className="top">
                <img src="/Image.png" alt="" />
            </div>
            <div className="bottom">
                <div className='left'>
                    <div className="route">

                        <Link to="/">All</Link>
                        <Link to="/">Mens</Link>
                        <Link to="/">Womens</Link>
                        <Link to="/">Kids</Link>

                    </div>
                    <div className="heading">
                        Elevate Your Style with Design PLY
                    </div>
                    <div className="desc">
                        Explore a world of fashion at Design PLY, where trends meet  affordability. <br /> Immerse yourself in the latest styles and seize exclusive promotions.
                    </div>
                </div>

                <div className="shop">
                    <button>Shop Now</button>

                </div>

                <div className="right">
                    <div className='1con'>
                        <h1>1,500 +</h1>
                        <span>Fashion Products</span>
                    </div>
                    <div className='2con'>
                        <h1>50 +</h1>
                        <span>New arrivals every month.</span>
                    </div>
                    <div className='3con'>
                        <h1>30%</h1>
                        <span>OFF on select items.</span>
                    </div>
                    <div className='4con'>
                        <h1>95%</h1>
                        <span>Customer Satisfaction Rate</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
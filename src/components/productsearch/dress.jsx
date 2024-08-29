import { Link } from 'react-router-dom'
import './card123.scss'

function Dress() {
    return (

        <div className="card">
            <div className="top">
                <img src="/Image (1).png" alt="" />
            </div>
            <div className="bottom">
                <div className="details">
                    <span>Womenswear</span>
                    <Link>
                        Shop now
                    </Link>
                </div>
                <div className="nameprice">
                    <h4>Timeless A-line Evening Dress</h4>
                    <div className="desc">
                        <span>Fit Ankle-length</span>
                        <span>prices $109.99</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dress
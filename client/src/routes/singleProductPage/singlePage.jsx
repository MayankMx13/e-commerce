import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Questions from '../../components/questions/questions'
import Recommend from '../../components/recommend/recommend'
import './singlepage.scss'

function SinglePage() {
    return (
        <div className='singlePage'>
            <Navbar />

            <div className="mainContainer">
                <div className="top">
                    <div className="top1">
                        <div className="left">
                            <h3>Elegant Evening Gown</h3>
                            <p>Fitted bodice, flowing skirt </p>
                            <p className='stock'>In stocks</p>

                        </div>
                        <div className="right">
                            <button className='cart'><img src="/cart.png" alt="" />Add to Cart</button>
                            <button className='shop'><img src="/shoppingBag.png" alt="" />Shop Now</button>
                        </div>
                    </div>
                    <div className="bottom1">
                        <div className="leftimg">
                            <img src="/imgpro1.png" alt="" />
                        </div>
                        <div className="rightimg">
                            <img src="/imgpro2.png" alt="" />
                            <img src="/imgpro3.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left1">
                        <div className='heading'>
                            <h3>Materials, Care and origin</h3>
                        </div>
                        <div>
                            <h3>Join Life</h3>
                            <p>Tracing its roots back to ancient Greek draped garments, has evolved through centuries, often crafted from luxurious fabrics like silks, satins, and velvets.</p>
                        </div>
                        <div className='materials'>
                            <h3>Materials</h3>
                            <p> Tracing its roots back to ancient Greek draped garments, has evolved through centuries, often crafted from luxurious fabrics like silks, satins, and velvets.</p>
                            <img src="/material.png" alt="" />
                        </div>
                    </div>
                    <div className="right1">
                        <div>
                            <h3>Features</h3>
                            <ul>
                                <li>Distressed detailing for a rugged look</li>
                                <li>Button-up front closure with engraved metal buttons </li>
                                <li>Two chest pockets with buttoned flaps</li>
                                <li>Two side pockets for added functionality</li>
                                <li>Adjustable buttoned cuffs for a personalized fit</li>
                                <li>Back waist tabs for customizable styling</li>
                            </ul>
                        </div>
                        <div className='price'>
                            <div className="leftpri">
                                <h4>Price</h4>
                                <h2>$89.99</h2>
                            </div>
                            <div className="rightpri">
                                <button> <img src="/cart.png" alt="" />Add to Cart</button>
                            </div>
                        </div>
                        <div className='sizes'>
                            <div className="topsize">
                                Avilable Sizes
                            </div>
                            <div className="bottomsize">
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                            </div>
                        </div>

                        <div className='rating'>
                            <h3>Rating and Reviews</h3>
                            <div className="status">
                                <div className="leftrat">
                                    <h3 className='number'>4.8</h3>
                                    <img src="/Container.png" alt="" />
                                    <p>49 Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Recommend />
            <div className='question'>
                <Questions />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default SinglePage
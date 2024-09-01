import './footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className='Slider'>
                <span>Tank Top</span>
                <img src="/star.png" alt="" />
                <span>T-Shirt</span>
                <img src="/star.png" alt="" />
                <span>Long-Sleeve T-Shir</span>
                <img src="/star.png" alt="" />
                <span>Raglan Sleeve Shirt</span>
                <img src="/star.png" alt="" />
                <span>Crop Top</span>
                <img src="/star.png" alt="" />
                <span>V-Neck Shirt</span>
                <img src="/star.png" alt="" />
                <span>Muscle Shirt</span>
            </div>
            <div className='banner'>
                <div className="left">Design PLY</div>
                <div className="right">
                    <ul>
                        <li><a href=""><img src="/btn1.png" alt="" /></a></li>
                        <li><a href=""><img src="/btn2.png" alt="" /></a></li>
                        <li><a href=""><img src="/btn3.png" alt="" /></a></li>

                    </ul>
                </div>
            </div>



            <div className='about'>
                <div className='Name'>
                    <div>Home</div>
                    <ul>
                        <li>Why Us</li>
                        <li>About Us</li>
                        <li>Testimonials</li>
                        <li>FAQ's</li>
                    </ul>
                </div>
                <div className='Products'>
                    <div>Products</div>
                    <ul>
                        <li>Menswear</li>
                        <li>Womenswear</li>
                        <li>Kidswear</li>
                    </ul>
                </div>
                <div className='news'>
                    <div>Subscibe to Newsletter</div>
                    <input type="email" name="email" required placeholder='Your Email' />
                </div>
            </div>

            <div className='tandc'>
                <div>© 2024 StyleLoom. All rights reserved.</div>
                <div>Terms & Conditions Privacy Policy</div>
            </div>


        </div>
    )
}

export default Footer
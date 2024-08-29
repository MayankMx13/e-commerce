import './contact.scss'
import Navbar from "../../components/navbar/navbar"
import Footer from '../../components/footer/footer'
import Questions from '../../components/questions/questions'
import { Link } from 'react-router-dom'
import Recommend from '../../components/recommend/recommend'

function Contact() {
    return (
        <div className='contact'>
            <Navbar />

            <div className='onediv'>
                <div className='head'>
                    <div className='left'>
                        <h2>Your Partner in Every Step of Your Fashion Journey.</h2>
                        <p>24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.</p>
                    </div>
                    <div className="right">
                        <img src="/backContact.png" alt="" />
                    </div>
                </div>
                <div className='info'>
                    <h2>CONTACT INFORMATION</h2>
                </div>
                <div className='cards'>
                    <div className='det'>
                        <img src="/mail.png" alt="" />
                        <h2>Email</h2>
                        <p>support@StyleLoom.com</p>
                    </div>
                    <div className='det'>
                        <img src="/phone.png" alt="" />
                        <h2>Phone</h2>
                        <p>+91 9856412378</p>
                    </div>
                    <div className='det'>
                        <img src="/location.png" alt="" />
                        <h2>Location</h2>
                        <p>Get Location</p>
                    </div>
                </div>
            </div>


            <div className="twodiv">
                <div className='head2'>
                    <h3>RETURN POLICY</h3>
                    <Link>Read Return Policy</Link>
                </div>
                <div className='cards'>
                    <div className='det2'>
                        <img src="/eligible.png" alt="" />
                        <div>

                            <h3>Eligibility</h3>
                            <p>Items must be unused, with tags attached, and returned within 30 days of delivery.</p>
                        </div>
                    </div>
                    <div className='det2'>

                        <img src="/process.png" alt="" />
                        <div>
                            <h3>Process</h3>
                            <p>Initiate returns through our Return Center for a smooth and efficient process.</p>
                        </div>
                    </div>
                    <div className='det2'>

                        <img src="/refund1.png" alt="" />
                        <div>
                            <h3>Refund</h3>
                            <p>Expect a refund to your original payment method within 7-10 business days.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="twodiv">
                <div className='head2'>
                    <h3>CANCILATION POLICY</h3>
                    <Link>Read  Cancilation Policy</Link>
                </div>
                <div className='cards'>
                    <div className='det2'>
                        <img src="/eligible.png" alt="" />
                        <div>

                            <h3>Eligibility</h3>
                            <p>Items must be unused, with tags attached, and returned within 30 days of delivery.</p>
                        </div>
                    </div>
                    <div className='det2'>

                        <img src="/process.png" alt="" />
                        <div>
                            <h3>Process</h3>
                            <p>Initiate returns through our Return Center for a smooth and efficient process.</p>
                        </div>
                    </div>
                    <div className='det2'>

                        <img src="/refund1.png" alt="" />
                        <div>
                            <h3>Refund</h3>
                            <p>Expect a refund to your original payment method within 7-10 business days.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="recommend">
                <Recommend />
            </div>

            <div className="questions">
                <Questions />
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Contact
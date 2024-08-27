import Features from '../../components/features/features'
import Footer from '../../components/footer/footer'
import Hero from '../../components/hero/hero'
import Navbar from '../../components/navbar/navbar'
import Process from '../../components/process/process'
import Products from '../../components/product/products'
import Questions from '../../components/questions/questions'
import './homepage.scss'

function Homepage() {
    return (
        <div className='homepage'>
            <Navbar />

            <div className='hero'>
                <Hero />
            </div>
            <div className="features">
                <Features />
            </div>
            <div className='process'>
                <Process />
            </div>
            <div className='product'>
                <Products />
            </div>
            <div className='question'>
                <Questions />
            </div>
            <div className='footer'>
                <Footer />
            </div>

        </div>
    )
}

export default Homepage
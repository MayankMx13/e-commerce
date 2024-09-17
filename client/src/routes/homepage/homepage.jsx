import Features from '../../components/features/features'
import Footer from '../../components/footer/footer'
import Hero from '../../components/hero/hero'
import Navbar from '../../components/navbar/navbar'
import Process from '../../components/process/process'
import Products from '../../components/product/products'
import Questions from '../../components/questions/questions'
import Recommend from '../../components/recommend/recommend'
import './homepage.scss'

function Homepage() {
    return (
        <div className='homepage'>
            <Navbar />
            <Hero />
            <Features />
            <Process />
            <Products />
            <Recommend />
            <Questions />
            <Footer />
        </div>
    )
}

export default Homepage
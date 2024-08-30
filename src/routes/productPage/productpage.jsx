
import Footer from '../../components/footer/footer'
import Questions from '../../components/questions/questions'
import './productPage.scss'
import Navbar from '../../components/navbar/navbar'
import Productsearch from '../../components/productsearch/productsearch'
import Recommend from '../../components/recommend/recommend'


function Productpage() {
    return (
        <div className='productpage'>
            <Navbar />
            <div className="header">
                <div className="left">

                    <h2>Explore the Latest Trends and Timeless Classics</h2>
                    <p> Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics</p>
                    <div className='buttons'>
                        <button>All</button>
                        <button>Mens</button>
                        <button>Womens</button>
                        <button>Kids</button>
                    </div>
                </div>
                <div className="right">
                    <img src="/Abstract Design.png" alt="" />
                </div>
            </div>

            <div className='productsSearch'>
                <Productsearch />
            </div>

            <div className="question">

                <Questions />
            </div>
            <Recommend />

            <div className="footer">

                <Footer />
            </div>

        </div>
    )
}

export default Productpage
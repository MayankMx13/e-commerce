import Footer from '../../components/footer/footer'
import Questions from '../../components/questions/questions'
import Recommend from '../../components/recommend/recommend'
import './singlepage.scss'

function SinglePage() {
    return (
        <div className='singlePage'>

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
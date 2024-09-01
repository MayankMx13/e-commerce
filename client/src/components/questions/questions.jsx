import { Link } from "react-router-dom";
import "./questions.scss";

function Questions() {
    return (
        <div className="questions">
            <div className="top">
                <div className="left">
                    <h2>Have Questions? We Have Answers.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="buttons">
                        <button>All</button>
                        <button>Ordering</button>
                        <button>Shipping</button>
                        <button>Returns</button>
                        <button>Support</button>
                    </div>
                </div>
                <div className="right">
                    <img src="/vec.png" alt="" />
                </div>
            </div>
            <div className="bottom">

                <div className="qContainer">
                    <h3>What payment methods do you accept?</h3>
                    <p>
                        We accept a variety of payment methods, including credit/debit
                        cards,
                    </p>
                </div>
                <div className="qContainer">
                    <h3>What payment methods do you accept?</h3>
                    <p>
                        We accept a variety of payment methods, including credit/debit
                        cards,
                    </p>
                </div>
                <div className="qContainer">
                    <h3>What payment methods do you accept?</h3>
                    <p>
                        We accept a variety of payment methods, including credit/debit
                        cards,
                    </p>
                </div>
                <div className="qContainer">
                    <h3>What payment methods do you accept?</h3>
                    <p>
                        We accept a variety of payment methods, including credit/debit
                        cards,
                    </p>
                </div>
                <div className="qContainer">
                    <h3>What payment methods do you accept?</h3>
                    <p>
                        We accept a variety of payment methods, including credit/debit
                        cards,
                    </p>
                </div>
                <div className="qContainer">
                    <h3>What payment methods do you accept?</h3>
                    <p>
                        We accept a variety of payment methods, including credit/debit
                        cards,
                    </p>
                </div>


                <div className="wardrobe">
                    <div className="left">
                        <h2>elevate your wardrobe</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, culpa.</p>
                    </div>
                    <div className="right">
                        <Link>Shop now</Link>
                        <img src="/Vector.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;

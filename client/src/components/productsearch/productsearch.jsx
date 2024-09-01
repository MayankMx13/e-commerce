
import { useEffect, useState } from 'react'
import './productsearch.scss'
import { Link } from 'react-router-dom';
import Dress from './dress';


function Productsearch() {
    const [data, setData] = useState([]);
    const PORT = import.meta.env.VITE_SERVER_URL;

    useEffect(() => {

        const fetchproducts = async () => {

            try {
                const res = await fetch(PORT + "womens");
                console.log(PORT);
                if (!res.ok) throw new Error("network not working");

                const data = await res.json();



                setData(data.dress.slice(0, 3));

            } catch (error) {
                console.log(error);

            }
        }
        fetchproducts();
    }, [])


    return (
        <div className='productsearch'>
            <div className="main">
                <div className='head'>
                    <h3>Dresses</h3>
                    <Link>View All</Link>
                </div>

                <div className="cardContainer">
                    {

                        data.map((dress) => (
                            <Dress key={dress.id} item={dress} />
                        ))
                    }
                </div>
            </div>
            <div className="main">
                <div className='head'>
                    <h3>Dresses</h3>
                    <Link>View All</Link>
                </div>

                <div className="cardContainer">
                    {

                        data.map((dress) => (
                            <Dress key={dress.id} item={dress} />
                        ))
                    }
                </div>
            </div>
            <div className="main">
                <div className='head'>
                    <h3>Dresses</h3>
                    <Link>View All</Link>
                </div>

                <div className="cardContainer">
                    {

                        data.map((dress) => (
                            <Dress key={dress.id} item={dress} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Productsearch
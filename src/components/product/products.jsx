import { Link } from "react-router-dom";
import "./products.scss";

import Card from "./card";
import { useEffect, useState } from "react";



function Products() {
    const [data, setData] = useState();

    useEffect(() => {
        console.log(
            "run"
        )
        const fetchproducts = async () => {

            try {
                const res = await fetch("http://localhost:3000/products");
                console.log(res);
                if (!res.ok) throw new Error("network not working");

                const data = await res.json();
                console.log(data);

                setData(data);

            } catch (error) {
                console.log(error);

            }
        }
        fetchproducts();

    }, []);

    return (
        <div className="products">
            <div className="up">
                <div className="left">
                    <h2>Elevate Your Style with Our Latest Collection</h2>
                    <p>Each piece is crafted to enhance your fashion statement.</p>
                    <div className="nav">
                        <Link>All</Link>
                        <Link>Mens</Link>
                        <Link>Womens</Link>
                        <Link>Kids</Link>
                    </div>
                </div>

                <div className="right">
                    <img src="/backpro.png" alt="" />
                </div>
            </div>

            <div className="cardContainer">{

                data.map((product) => (
                    <Card key={product.id} item={product} />
                ))

            }



            </div>
        </div>
    );
}

export default Products;

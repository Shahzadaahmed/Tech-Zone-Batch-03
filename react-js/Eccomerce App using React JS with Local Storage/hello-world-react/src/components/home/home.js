// Note: Home component...!

import React, { useEffect, useState } from 'react';

const Home = () => {

    // States...!
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("ProductList") != null) {
            let fetchProducts = localStorage.getItem("ProductList");
            let products = JSON.parse(fetchProducts);
            console.log(products);
            setProductData(products)
        }

        else {
            localStorage.setItem("ProductList", JSON.stringify([]));
        };
    }, []);

    return (
        <>
            <h1> Home Screen! </h1>

            <div>
                {
                    (productData && productData.length > 0)
                        ?
                        (
                            productData.map(function (item, index) {
                                return (
                                    <h3 key={index}>
                                        {`Item Name: ${item.productName}. Price: ${item.productPrice}.`}
                                    </h3>
                                );
                            })
                        )
                        :
                        (
                            <h1> No Products Found! 😢 </h1>
                        )
                }
            </div>
        </>
    );
};

export default Home;
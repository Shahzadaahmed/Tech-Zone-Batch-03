// Note: MyData component...!

import React, { useEffect, useState } from 'react';

const MyData = () => {

    // States...!
    const [productData, setProductData] = useState([]);
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("ProductList") != null) {
            let fetchProducts = localStorage.getItem("ProductList");
            let products = JSON.parse(fetchProducts)
            console.log(products);
            setProductData(products);

            // Note: Fetching user...!
            let fetchUser = localStorage.getItem("UserState");
            fetchUser = JSON.parse(fetchUser);
            console.log('User: ', fetchUser);
            if (fetchUser) { setAuthUser(fetchUser) };
        }

        else {
            localStorage.setItem("ProductList", JSON.stringify([]));
        };
    }, []);

    // NoteL Funtion to delete product...!
    const deleteProduct = (data, key) => {
        // console.log(data, key);

        let productsClone = productData.slice(0);
        productsClone.splice(key, 1);
        setProductData(productsClone);
    };
    
    // useEffect...!
    useEffect(() => {
        let productsDataClone = productData.slice(0);
        localStorage.setItem("ProductList", JSON.stringify(productsDataClone));
    }, [productData]);

    return (
        <>
            <h1> My Data! </h1>

            <div>
                {
                    (productData && productData.length > 0)
                        ?
                        (
                            productData.map(function (item, index) {
                                return (
                                    authUser.email == item.productOwnerId ?
                                        <h3 key={index}>
                                            {`Item Name: ${item.productName}. Price: ${item.productPrice}.`}
                                            <button onClick={() => deleteProduct(item, index)}> Delete Item </button>
                                        </h3> : null
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

export default MyData;
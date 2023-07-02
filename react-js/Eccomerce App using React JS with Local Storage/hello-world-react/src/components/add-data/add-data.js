// Note: AddData component...!

import React, { useEffect, useState } from 'react';

const AddData = () => {

    // States...!
    const [productName, setProductName] = useState("");
    const [productDes, setProductDes] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [authUser, setAuthUser] = useState(null);
    const [data, setData] = useState([]);

    const clearStates = () => {
        setProductName("");
        setProductDes("");
        setProductPrice("");
    };

    // Note: Function to add product...!
    const addProduct = () => {

        let productsClone = data.slice(0);

        let productData = {
            productName,
            productDes,
            productPrice,
            productOwnerId: authUser.email
        };
        // console.log(productData);
        productsClone.push(productData);
        setData(productsClone);

        // Note: Saving data in database...!
        localStorage.setItem("ProductList", JSON.stringify(productsClone));

        clearStates();
    };

    useEffect(() => {
        // Note: Fetching user...!
        let fetchUser = localStorage.getItem("UserState");
        let user = JSON.parse(fetchUser);
        setAuthUser(user);

        // Note: Fetching user...!
        let fetchUProducts = localStorage.getItem("ProductList");
        let products = JSON.parse(fetchUProducts);
        console.log("Products: ", products);
        setData(products);
    }, []);

    return (
        <>
            <h1> Add Data Screen! </h1>

            <div>
                <label>
                    Product Name:
                    <input
                        type='text'
                        placeholder='Product Name'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </label> <br />

                <label>
                    Product Description:
                    <input
                        type='text'
                        placeholder='Product Description'
                        value={productDes}
                        onChange={(e) => setProductDes(e.target.value)}
                    />
                </label> <br />

                <label>
                    Product Price:
                    <input
                        type='number'
                        placeholder='Product Price'
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </label> <br />

                <button onClick={addProduct}> Add Product </button>
            </div>
        </>
    );
};

export default AddData;
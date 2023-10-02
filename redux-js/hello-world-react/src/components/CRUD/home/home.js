// Home Component...!

import React, { useState } from 'react';
import axios from 'axios';
import "./home.css";

const Home = () => {

    // States...!
    const [formStates, setFormStates] = useState({
        name: "",
        email: "",
        password: "",
        profileImage: null
    });

    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const uploadImageToCloud = async (res) => {
        try {
            let response = await axios({
                method: "POST",
                // url: "http://192.168.0.110:8080/api/image/upload",
                url: "http://192.168.0.110:8080/api/file/upload",
                data: { fileToUpload: res },
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkJpbGFsIEFobWVkIiwiZW1haWwiOiJiaWxhbGtoYW42djZAZ21haWwuY29tIiwiaWF0IjoxNjkyMjc3MDUwLCJleHAiOjE2OTIzNjM0NTB9.F6EZCk4ahrE-vvz_HR2JyBz-vLKQYHKgqHGimp9FU0A",
                    "Accept": "application/json",
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(response);
        }

        catch (error) {
            console.log(`Somwthing went wrong while uploading image to cloud: ${error}`);
        };
    };

    // Note: Image handler...!
    const selectImage = async (e) => {
        let fileData = e.target.files[0];
        console.log("Image Data: ", fileData);

        fileData && uploadImageToCloud(fileData);

        // if (fileData) {
        //     let res = await toBase64(fileData);
        //     console.log(res);
        // if (res) {
        //     setFormStates({
        //         ...formStates,
        //         profileImage: res
        //     });
        //     alert("Image uploaded successfully!");
        // };
        // };
    };

    // Handler to create user...!
    const createUser = async () => {
        let apiUrl = "http://localhost:5050/api/user/add";

        try {
            let response = await axios({
                method: "POST",
                url: apiUrl,
                data: formStates
            });
            console.log(response);
        }

        catch (error) {
            console.log("Something went wring while creating user: ", error);
            let errorMessage = error.response.data.message;
            alert(errorMessage);
        };
    };

    return (
        <div>

            <section
                className="vh-100"
                id="sectionContainer"
            >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">

                            {/* Note: For showing error message */}
                            {/* <h2 className={styles.showErrMessage}> {formStates.errorMessage} </h2> */}

                            <div className="card text-black" style={{ borderRadius: '25px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign Up
                                            </p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            placeholder='Your Name'
                                                            id="form3Example1c"
                                                            className="form-control custumInputField"
                                                            name='userName'
                                                            value={formStates.name || ""}
                                                            onChange={(e) => setFormStates({ ...formStates, name: e.target.value })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            placeholder='Your Email'
                                                            id="form3Example3c"
                                                            className="form-control custumInputField"
                                                            name='email'
                                                            value={formStates.email || ""}
                                                            onChange={(e) => setFormStates({ ...formStates, email: e.target.value })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            placeholder='Password'
                                                            id="form3Example4c"
                                                            className="form-control custumInputField"
                                                            name='password'
                                                            value={formStates.password || ""}
                                                            onChange={(e) => setFormStates({ ...formStates, password: e.target.value })}
                                                        />
                                                    </div>
                                                </div>

                                                {/* <form> */}
                                                <input
                                                    type='file'
                                                    onChange={selectImage}
                                                />
                                                {/* </form> */}

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary btn-lg"
                                                        onClick={createUser}
                                                    >
                                                        Sign Up
                                                    </button>
                                                </div>

                                            </form>
                                        </div>

                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                // src={assetPaths.appSectionCover}
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
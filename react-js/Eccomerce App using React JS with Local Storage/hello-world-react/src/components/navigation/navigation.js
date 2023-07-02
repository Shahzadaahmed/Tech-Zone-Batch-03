import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function Navigation() {
    const [showNav, setShowNav] = useState(false);

    const logOut = () => {
        alert("You have logged out successfully!");
        localStorage.removeItem("UserState");
        window.location.reload();
    };

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNav}>
                    <MDBNavbarNav>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page'>
                                <Link to={"/"}>
                                    All Data
                                </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link to={"my-data"}>
                                    My Data
                                </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link to={"my-data"}>
                                    Deleted Data
                                </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link to={"add-data"}>
                                    Add Data
                                </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem onClick={logOut}>
                            <MDBNavbarLink>
                                <Link to={""}>
                                    Log Out
                                </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
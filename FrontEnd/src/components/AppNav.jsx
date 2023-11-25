import React from 'react';
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

const AppNav = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Navbar.Brand>MERN APP</Navbar.Brand>
                    < NavLink className= "nav-link" to= "/" >Home</NavLink>
                    <NavLink className= "nav-link" to= "/save" >Save</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNav;
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
background-color: rgba(5,5,4, 0.95);

a {
    color: #E2E6EA;
}
`

const ResponsiveNav = () => {
    return (
        <StyledNavbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand>
                <NavLink to="/">
                    Google Book Finder
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <NavLink to="/saved">
                            View Collection
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </StyledNavbar>
    )
}

export default ResponsiveNav;
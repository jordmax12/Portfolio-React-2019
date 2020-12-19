import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                        <Nav.Link href="/timeline">Timeline</Nav.Link>
                        {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
                        <a href="https://github.com/jordmax12/Portfolio-React-2019" target="__blank" className="nav-link">View in Github</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;

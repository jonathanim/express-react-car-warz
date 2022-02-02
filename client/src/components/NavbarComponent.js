import React from 'react';
import { Navbar, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarComponent() {
    return (
        <Row>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Car Warz</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Link to="/">  Top Rank</Link>
                        <Link to="/">All</Link>
                    </Nav>
                </Container>
            </Navbar>
        </Row>

    )
}

export default NavbarComponent;

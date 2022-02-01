import React from 'react';
import { Navbar, Container, Nav, Row } from 'react-bootstrap'

function NavbarComponent() {
    return (
        <Row>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Car Warz</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#current-winner">Current Winner</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Row>

    )
}

export default NavbarComponent;

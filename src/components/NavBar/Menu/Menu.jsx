import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Menu.css'


const Menu = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container fluid>
                <div className='collapse navbar-collapse'>
                    <Nav className="mx-auto">
                        <Nav.Item><Nav.Link href="#home">Inicio</Nav.Link></Nav.Item>
                        <NavDropdown title="Productos" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">Mates</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Termos</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">Otros</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item><Nav.Link href="#features">Cuidados</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#features">Contacto</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#pricing">Nosotros</Nav.Link></Nav.Item>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    )
}

export default Menu
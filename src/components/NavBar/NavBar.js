import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <div className='divLogo'>
                <Navbar.Brand href="#home">CEBADOS</Navbar.Brand>
                <img class="logo" src="https://www.mateandco.com.ar/wp-content/uploads/2020/06/cropped-Logo-Mate-ICO.png" alt='LOGO'/>
            </div>
            <Nav className="me">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
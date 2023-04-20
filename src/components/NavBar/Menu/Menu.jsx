import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useParams } from 'react-router-dom';
import './Menu.css'
import useFetch from '../../../utilities/useFetch';
const urlApi = 'https://fakestoreapi.com/products/categories';



const Menu = () => {
    const { data } = useFetch(urlApi);
    return (
        <Navbar bg="light" variant="light">
            <Container fluid>
                <div className='collapse navbar-collapse'>
                    <Nav className="mx-auto">

                        {data.map((item, index) => {
                            return(
                            <Nav.Item key={index}><NavLink to={`/category/${item}`} > {item} </NavLink></Nav.Item>
                            )

                        })}

                    </Nav>
                </div>
            </Container>
        </Navbar>
    )
}

export default Menu
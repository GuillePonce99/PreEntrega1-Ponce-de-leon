import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom';
import './Menu.css'
import useFetch from '../../../utilities/useFetch';
import useFirestore from '../../../utilities/useFetch';
import { useMemo } from 'react';
const urlApi = 'https://fakestoreapi.com/products/categories';
const nameCollection = "categories"



const Menu = () => {
    const [data] = useFetch(urlApi)

    // const dataProcess = useMemo(() => {
    //     const categoriesObject = data.length !== 0 ? data[0] : [];
    //     return "category" in categoriesObject ? categoriesObject.category : [];
    //   }, [data]);
    
    return (
        <Navbar bg="light" variant="light">
            <Container fluid>
                <div className='collapse navbar-collapse'>
                    <Nav className="mx-auto">
                        {data.map((item, index) => {
                            return (
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


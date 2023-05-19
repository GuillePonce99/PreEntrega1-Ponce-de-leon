import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, NavLink } from 'react-router-dom';
import useFetch from '../utilities/useFetch';
import ".././App.css"
import { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';
const urlApi = 'https://fakestoreapi.com/products';

const ProductosDetalles = () => {
    const { idProducts } = useParams();
    const [ data ] = useFetch(`${urlApi}/${idProducts}`);
    const { title, image, price, description } = data
    const { addToCar } = useContext(GeneralContext)
    const handlesBtn = () => {
        addToCar(data);
    }

    return (
        <>
            <div className='detallesCart'>
                <Button className='btnVolver' variant='custom'> <NavLink to="/">VOLVER</NavLink></Button>

                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            {price}
                        </Card.Text>
                        <Button onClick={handlesBtn} variant="custom">Comprar</Button>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}

export default ProductosDetalles

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import useFetch from '../utilities/useFetch';
import ".././App.css"
import { NavLink } from 'react-router-dom';
const urlApi = 'https://fakestoreapi.com/products';

const ProductosDetalles = ({ handlesUpdate }) => {
    const { idProducts } = useParams();
    const { data } = useFetch(`${urlApi}/${idProducts}`);
    const { title, image, price, description} = data
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
                        <Button onClick={handlesUpdate} variant="custom">Comprar</Button>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}

export default ProductosDetalles

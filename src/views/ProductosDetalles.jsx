import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, NavLink } from 'react-router-dom';
import ".././App.css"
import { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';
import useFirestore from '../utilities/useFirestore';
const nameCollection = "productos"

const ProductosDetalles = () => {
    const { idProducts: documentId } = useParams();
    const [ data ] = useFirestore({nameCollection,documentId});
    const { title, imgUrl, price, description } = data
    const { addToCar } = useContext(GeneralContext)
    const handlesBtn = () => {
        addToCar(data);
    }

    return (
        <>
            <div className='detallesCart'>
                <Button className='btnVolver' variant='custom'> <NavLink to="/">VOLVER</NavLink></Button>

                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={imgUrl} />
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

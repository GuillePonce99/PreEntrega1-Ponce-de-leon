import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormCar = () => {


    return (
        <div className='formCar'>
            <Form>
                <p >COMPLETA LOS DATOS PARA REALIZAR LA COMPRA</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="name" placeholder="Ingrese su nombre" />
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="lastname" placeholder="Ingrese su Apellido" />
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese su Numero de telefono" />
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su mail" />
                    <Form.Text className="text-muted">
                        No compartiremos tu informacion con nadie mas.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    LISTO
                </Button>
            </Form>
        </div>
    )

}

export default FormCar
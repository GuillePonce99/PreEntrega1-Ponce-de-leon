import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const OrdenProductosComponent = (props) => {
    const {data} = props
    console.log(data);

    return (
        <div>
            {data && data.map((item,index) => {
                <Card key={index} className='misComprasCard' style={{ width: '15rem', height: '15rem', minHeight: "0" }}>
                    <Card.Body>
                        <Card.Title>Usted compro {item.amount} </Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            })
            }
        </div>
    )
}

export default OrdenProductosComponent
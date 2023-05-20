import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'
import "./../App.css"
import useFirestore from '../utilities/useFirestore';
import OrdenProductosComponent from '../components/MisComprasComponent/OrdenProductosComponent';
const nameCollection = "ordenes"

const OrdenDetallesView = () => {
    const { ordenId: documentId } = useParams()
    const [data] = useFirestore({ nameCollection, documentId });
    const { date, items, orderId } = data
    
    return (
        <div className='detallesCart'>
            <OrdenProductosComponent data={items} />
        </div >

    )
}

export default OrdenDetallesView

/*

  
*/
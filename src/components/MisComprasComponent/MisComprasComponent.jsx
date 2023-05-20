import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./../../App.css"
import { useNavigate } from 'react-router-dom';

const MisComprasComponent = (props) => {
  const { orden , loading} = props
  const navigate = useNavigate();
  console.log(loading);
  const handlesBtn = ()=> {
    navigate(`/miscompras/detalles/${orden.id}`)
  }

  return (
    <div className='detallesCart'>
      <Card className='misComprasCard' style={{ width: '15rem', height: '15rem', minHeight: "0" }}>
        <Card.Body>
          <Card.Title>{orden.id}</Card.Title>
          <Card.Text>{orden.date}</Card.Text>
          <Button onClick={handlesBtn} variant="primary">VER DETALLES</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MisComprasComponent
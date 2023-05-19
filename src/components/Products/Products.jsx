import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Products.css"
import { NavLink } from 'react-router-dom';


function Products(props) {
  const { data, addToCar } = props;
  const { title, imgUrl, price, description, id } = data
  const [stock, setStock] = useState(10)
  const handlesBtn = () => {
    if (stock > 0) {
      setStock(stock - 1)
      addToCar(data)
    } else {
      alert("no hay stock")
    }
  }
  
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <NavLink className="navLinkA" to={`/productos/detalles/${id}`}>
        ➕
      </NavLink>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ color: "red", fontWeight: "bold" }}>
          Quedan solo {stock} !!
        </Card.Text>
        <Card.Text>
          $ {price}
        </Card.Text>
        <Button onClick={handlesBtn} variant="custom">COMPRAR</Button>
      </Card.Body>
    </Card>
  );
}

export default Products

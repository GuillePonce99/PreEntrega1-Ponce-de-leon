import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Products.css"



function Products(props) {
  const { data, handlesUpdate } = props;
  const { title, imgUrl, description, price, id } = data
  const [stock, setStock] = useState(10)
  const handlesBtn = () => {
    if (stock > 0) {
      setStock(stock - 1)
      handlesUpdate()
    } else {
      alert("no hay stock")
    }
  }
  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title+" "+id}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          $ {price}
        </Card.Text>
        <Card.Text>
          {stock}
        </Card.Text>
        <Button onClick={handlesBtn} variant="primary">COMPRAR</Button>
      </Card.Body>
    </Card>
  );
}

export default Products

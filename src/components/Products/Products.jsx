import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import "./Products.css"
import "../../App.css"
import { NavLink } from 'react-router-dom';
import ButtonsComponents from './ButtonsComponent';


function Products(props) {
  const { data, addToCar, removeToCar, width, className, showDelete, showInfo } = props;
  const { title, imgUrl, price, description, id } = data
  const [stock, setStock] = useState(10)
  const [amount, setAmount] = useState(1)
  const incrementAmount = () => {
    setAmount(amount + 1)
  }
  const decrementAmount = () => {
    {amount > 1 ? (setAmount(amount - 1)):setAmount(1)}
  }
  
  const handlesBtn = () => {
    if (stock > 0) {
      setStock(stock - 1)
      addToCar(data)
    } else {
      alert("no hay stock")
    }
  }

  const removeThisItem = () => {
    removeToCar(data);
  };

  return (
    <Card style={width ? { width: width } : { width: "20rem" }} className={className}>
      <Card.Img variant="top" src={imgUrl} />
      <ButtonsComponents showInfo={showInfo} showDelete={showDelete} removeThisItem={removeThisItem} idProduct={id} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ color: "red", fontWeight: "bold" }}>
          Quedan solo {stock} !!
        </Card.Text>
        <Card.Text>
          $ {price}
        </Card.Text>
        <div className='btn-groups'>
          <button className='btn-amount' onClick={incrementAmount}>➕</button>
          <button className='btn-amount' onClick={decrementAmount}>➖</button>
        </div>
        <Card.Text>
          UND. {amount}
        </Card.Text>
        <Button onClick={handlesBtn}  variant="custom">COMPRAR</Button>

      </Card.Body>
    </Card>
  );
}

export default Products

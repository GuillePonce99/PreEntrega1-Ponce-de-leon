import './CartWidget.css'
import React from 'react'
import { NavLink } from 'react-router-dom';

const CartWidget = ({car}) => {

  console.log(car);
  return (
    <div className='shopContainer'>
      <img className = "logoImg" src='https://images.vexels.com/media/users/3/200098/isolated/preview/7ad7c76da9a0cd7d2b01b64b2590617b-icono-de-carrito-de-compras-icono-de-carrito-de-compras.png' alt='logo carrito' width='50px'/>
      <div className='counterContainer'>
        {car.length}
      </div>
    </div>
  )
}

export default CartWidget
import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {

  return (
    <div className='mensaje'>
      <p>{props.mensaje}</p>
    </div>
  )
}

export default ItemListContainer
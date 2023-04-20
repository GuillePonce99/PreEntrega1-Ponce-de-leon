import React from 'react'
import "./ItemListContainer.css"
import Products from '../Products/Products'
import useFetch from '../../utilities/useFetch'
const urlApi = 'https://fakestoreapi.com/products';

const ItemListContainer = ({ handlesUpdate }) => {

  const { data, loading } = useFetch(urlApi);

  return (
    <div className='cardContainer'>
      {loading ? (
        <h1>Se estan cargando los productos...</h1>
      ) : (
        data.map((product) => {
          return (
            <Products key={product.id} data={product} handlesUpdate={handlesUpdate} />
          )
        })
      )
      }
    </div>
  )
}

export default ItemListContainer

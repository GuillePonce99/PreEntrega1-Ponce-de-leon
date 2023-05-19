import React from 'react'
import "./ItemListContainer.css"
import Products from '../Products/Products'
import useFetch from '../../utilities/useFetch'
import GeneralContext from '../../context/GeneralContext'
import { useContext } from 'react'
import useFirestore from '../../utilities/useFirestore'
const urlApi = 'https://fakestoreapi.com/products';
const nameCollection = "productos"

const ItemListContainer = () => {
  const {addToCar} = useContext(GeneralContext)
  const [ data, loading ] = useFirestore(nameCollection);

  return (
    <div className='cardContainer'>
      {loading ? (
        <h1>Se estan cargando los productos...</h1>
      ) : (
        data.map((product) => {
          return (
            <Products key={product.id} data={product} addToCar={addToCar} />
          )
        })
      )
      }
    </div>
  )
}

export default ItemListContainer

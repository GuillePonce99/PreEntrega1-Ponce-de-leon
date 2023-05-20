import React, { useContext }  from 'react'
import "./ItemListContainer.css"
import Products from '../Products/Products'
import GeneralContext from '../../context/GeneralContext'
import useFirestore from '../../utilities/useFirestore'
const nameCollection = "productos"

const ItemListContainer = () => {
  const {addToCar} = useContext(GeneralContext)
  const [ data, loading ] = useFirestore({nameCollection});
  
  return (
    
    <div className='cardContainer'>
      {loading ? (
        <h1>Se estan cargando los productos...</h1>
      ) : (
        data.map((product) => {
          return (
            <Products showInfo key={product.id} data={product} addToCar={addToCar} />
          )
        })
      )
      }
    </div>
  )
}

export default ItemListContainer

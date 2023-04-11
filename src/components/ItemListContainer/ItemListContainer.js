import React, { useState, useEffect } from 'react'
import "./ItemListContainer.css"
import Products from '../Products/Products'
import data from '../data.json'



const ItemListContainer = () => {
  const [count, setCount] = useState(0)
  const [productList, setProductList] = useState([])
  const handlesUpdate = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(data)
      }, 2500);

    }).then((result) => {
      setProductList(result);
    }).catch((reject) => {
      console.log(reject);
    });
  }, [])
  /*
  */
  
  return (
    <div className='cardContainer'>
      {productList.length === 0 ? (
        <h1>Se estan cargando los productos...</h1>
      ) : (
        productList.map((product) => {
          return <Products key={product.id} data={product} handlesUpdate={handlesUpdate} />
        })
      )}

      <p>TOTAL : {count}</p>

    </div>

  )
}

export default ItemListContainer

import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import useFetch from '../utilities/useFetch';
import Products from '../components/Products/Products';
import GeneralContext from '../context/GeneralContext';

const ProductosCategoria = () => {
  const { idCategory } = useParams();
  const [ data ] = useFetch(`https://fakestoreapi.com/products/category/${idCategory}`);
  const {addToCar} = useContext(GeneralContext)
  return (
    <div className='cardContainer'>{
      data.map((product) => {
        return (
          <Products key={product.id} data={product}  addToCar={addToCar} />
        )
      })
    }
    </div>
  )
};

export default ProductosCategoria
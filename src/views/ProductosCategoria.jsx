import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../utilities/useFetch';
import Products from '../components/Products/Products';

const ProductosCategoria = ({handlesUpdate}) => {
  const { idCategory } = useParams();
  const { data } = useFetch(`https://fakestoreapi.com/products/category/${idCategory}`);

  return (
    <div className='cardContainer'>{
      data.map((product) => {
        return (
          <Products key={product.id} data={product}  handlesUpdate={handlesUpdate} />
        )
      })
    }
    </div>
  )
};

export default ProductosCategoria
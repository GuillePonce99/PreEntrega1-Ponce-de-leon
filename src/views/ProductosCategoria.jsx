import React, { useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../utilities/useFetch';
import useFirestore from '../utilities/useFirestore';
import Products from '../components/Products/Products';
import GeneralContext from '../context/GeneralContext';
const nameCollection = "productos";

const ProductosCategoria = () => {
  const { idCategory } = useParams();

  const options = useMemo(()=> {
    const _withFilters = {nameCollection, filters: {where: ["category","==",idCategory]}};
    const _outFilters= {nameCollection};
    return idCategory ? _withFilters : _outFilters;
  },[idCategory]);

  const [ data ] = useFirestore(options);

  const {addToCar} = useContext(GeneralContext)
  return (
    <div className='cardContainer'>{
      data.map((product) => {
        return (
          <Products showInfo key={product.id} data={product}  addToCar={addToCar} />
        )
      })
    }
    </div>
  )
};

export default ProductosCategoria
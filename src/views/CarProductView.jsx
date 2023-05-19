import React from 'react'
import ".././App.css"
import { useContext } from 'react';
import Products from '../components/Products/Products';
import GeneralContext from '../context/GeneralContext';

const CarProductView = () => {
    const { addToCar, car } = useContext(GeneralContext)

    return (

        <div className='cardContainer'>
            {
                car.map((car, index) => {
                    return (
                        <div className='container'>
                            <Products key={index} data={car} addToCar={addToCar} />
                        </div>
                    )
                })
            }
        </div>

    )
}

export default CarProductView
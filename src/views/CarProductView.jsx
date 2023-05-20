import React from 'react'
import { useContext} from 'react';
import Products from '../components/Products/Products';
import GeneralContext from '../context/GeneralContext';
import InfoCar from '../components/CarComponent/InfoCar';
import ".././App.css"

const CarProductView = () => {
    const { addToCar, car, removeToCar } = useContext(GeneralContext)
    return (

        <div className='carContainer'>
            {car.length === 0 ? (<p className='noProducts'>No hay productos en tu carrito</p>)
                : (
                    car.map((item, index) => {
                        return (
                            <div key={index} className='car'>
                                <Products className={"cardCar"} width={"70%"} data={item} addToCar={addToCar} removeToCar={removeToCar} showDelete />
                            </div>
                        )
                    })
                )
            }
            <InfoCar />
        </div >
    )



}

export default CarProductView
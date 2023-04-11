import React from 'react'
import logoNrecortado from "./logoNrecortado.jpg"
import CartWidget from "../../CartWidget/CartWidget.js"
import './Marca.css'

const Marca = () => {
    return (
        <div className="marca">
            <div className="logo">
                <img src={logoNrecortado} alt="Mates" />
            </div>
            <div className="titulo">
                <p> CEBADOS </p>
                <p>Mates y accesorios</p>
            </div>
            <CartWidget/>
        </div>
    )
}

export default Marca
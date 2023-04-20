import React from 'react'
import logoNrecortado from "./logoNrecortado.jpg"
import CartWidget from "../../CartWidget/CartWidget.jsx"
import './Marca.css'
import { NavLink } from 'react-router-dom'

const Marca = ({ countProducts }) => {
    return (
        <div className="marca">
            <div className="logo">
                <img src={logoNrecortado} alt="Mates" />
            </div>
            <NavLink className="navLinkA" to="/">
                <div className="titulo">
                    <p> CEBADOS </p>
                    <p>Mates y accesorios</p>
                </div>
            </NavLink>
            <CartWidget countProducts={countProducts} />
        </div>
    )
}

export default Marca
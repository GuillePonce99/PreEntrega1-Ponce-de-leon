import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import { useState } from "react";
import ProductosDetalles from "./views/ProductosDetalles";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductosCategoria from "./views/ProductosCategoria";
import GeneralContext from "./context/GeneralContext";
import CarProductView from "./views/CarProductView";



function App() {
  const [car, setCar] = useState([])
  const addToCar = (item) => {
    setCar([...car,item])
  };

  return (
    <GeneralContext.Provider value={{ car, addToCar }}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/productos/detalles/:idProducts" element={<ProductosDetalles/>}></Route>
          <Route path="/" element={<ItemListContainer/>} ></Route>
          <Route path="/category/:idCategory" element={<ProductosCategoria/>} ></Route>
          <Route path="/productos/car" element={<CarProductView/>} ></Route>
        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;

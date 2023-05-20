import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import { useState } from "react";
import ProductosDetalles from "./views/ProductosDetalles";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductosCategoria from "./views/ProductosCategoria";
import GeneralContext from "./context/GeneralContext";
import CarProductView from "./views/CarProductView";
import MisComprasView from "./views/MisComprasView";
import OrdenDetallesView from "./views/OrdenDetallesView";
import './App.css';



function App() {
  const [car, setCar] = useState([])
  const addToCar = (item) => {
    setCar([...car,item])
  };

  const removeToCar = (item) => {
    const newArray = car.filter(_item => _item.id !== item.id);
    setCar(newArray)
  };

  const cleanCar = () => {
    setCar([]);
  };

  return (
    <GeneralContext.Provider value={{ car, addToCar, removeToCar, cleanCar }}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/productos/detalles/:idProducts" element={<ProductosDetalles/>}></Route>
          <Route path="/" element={<ItemListContainer/>} ></Route>
          <Route path="/category/:idCategory" element={<ProductosCategoria/>} ></Route>
          <Route path="/productos/car" element={<CarProductView/>} ></Route>
          <Route path="/miscompras" element={<MisComprasView/>} ></Route>
          <Route path="/miscompras/detalles/:ordenId" element={<OrdenDetallesView/>} ></Route>

        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;

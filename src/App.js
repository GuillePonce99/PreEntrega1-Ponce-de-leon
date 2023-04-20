import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import { useState } from "react";
import ProductosDetalles from "./views/ProductosDetalles";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductosCategoria from "./views/ProductosCategoria";



function App() {
  const [countProducts, setCountProducts] = useState(0)
  const handlesUpdate = () => {
    setCountProducts(countProducts + 1)
  };

  return (
    <BrowserRouter>
      <NavBar countProducts={countProducts} setCountProducts={setCountProducts} />
      <Routes>
        <Route path="/productos/detalles/:idProducts" element= {<ProductosDetalles handlesUpdate={handlesUpdate}/>}></Route>
        <Route path="/" element={<ItemListContainer  handlesUpdate={handlesUpdate}/>} ></Route>
        <Route path="/category/:idCategory" element={<ProductosCategoria  handlesUpdate={handlesUpdate}/>} ></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

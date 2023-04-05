import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  const mensaje = "ESTE ES EL CUERPO DE MI PAGINA"
  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje = {mensaje}/>
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import Marca from './Marca/Marca';
import Menu from './Menu/Menu';
import { useContext } from 'react';
import GeneralContext from '../../context/GeneralContext';


function NavBar() {

  const {car} = useContext(GeneralContext)
  return (
    <header>
      <Marca car={car}/>
      <Menu/>
    </header>
  );
};

export default NavBar;



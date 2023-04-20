import 'bootstrap/dist/css/bootstrap.min.css';
import Marca from './Marca/Marca';
import Menu from './Menu/Menu';


function NavBar({countProducts}) {

  return (
    <header>
      <Marca countProducts={countProducts}/>
      <Menu/>
    </header>
  );
};

export default NavBar;



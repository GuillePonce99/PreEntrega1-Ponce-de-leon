import 'bootstrap/dist/css/bootstrap.min.css';
import Marca from './Marca/Marca';
import Menu from './Menu/Menu';


function NavBar() {

  return (
    <header>
      <Marca/>
      <Menu/>
    </header>
  );
};

export default NavBar;



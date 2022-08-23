import { Link } from 'react-router-dom';
import {ShoppingMenuContainer} from './shoppingMenuStyled'

function ShoppingMenu(props) {
  console.log(props);
  return (
	<ShoppingMenuContainer>
	  <div className="nav__authLinks">
         <Link to='#' className="authLink">
           Vestidos de Fiesta
         </Link>
         <Link to='#' className="authLink">
         </Link>
         <Link to='#'className="authLink">
           Novedades
         </Link>
         <Link to='#' className="authLink">
           Inspiración
         </Link>
         <Link to='#' className="authLink">
           Colecciones
         </Link>

        <Link to='#' className="authLink">
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
        </Link>
        <Link to='#' className="authLink">
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
        </Link>
  </div>
	</ShoppingMenuContainer>
  );
}

export default ShoppingMenu;

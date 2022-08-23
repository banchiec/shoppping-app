import { Link } from 'react-router-dom';
import {ShoppingMenuContainer} from './shoppingMenuStyled'

function ShoppingMenu(props) {
  console.log(props);
  return (
	<ShoppingMenuContainer>
	  <div className="nav__authLinks">
         <Link to={PATHS.SHOPPING} className="authLink">
           Tienda 
         </Link>
         <Link to={PATHS.PROTECTEDPAGE} className="authLink">
         </Link>
         <Link to={PATHS.PROTECTEDPAGE} className="authLink">
           Novedades
         </Link>
         <Link to={PATHS.PROTECTEDPAGE} className="authLink">
           Inspiración
         </Link>
         <Link to={PATHS.PROTECTEDPAGE} className="authLink">
           Colecciones
         </Link>

        <Link to={PATHS.PROTECTEDPAGE} className="authLink">
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
        </Link>
        <Link to={PATHS.PROTECTEDPAGE} className="authLink">
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
        </Link>
  </div>
	</ShoppingMenuContainer>
  );
}

export default ShoppingMenu;

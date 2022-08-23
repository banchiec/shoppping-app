import CardShopProduct from '../../components/Cards/CardShopProduct/CardShopProduct';
import { ContainerShopping } from './shoppingStyled';

function Shopping(props) {
  console.log(props);
  return (
    <ContainerShopping>
      <CardShopProduct/>
    </ContainerShopping>
  );
}
export default Shopping;

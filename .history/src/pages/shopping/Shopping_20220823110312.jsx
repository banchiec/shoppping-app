import CardBarChart from '../../components/Cards/CardBarChart';
import CardLineChart from '../../components/Cards/CardLineChart';
import CardPageVisits from '../../components/Cards/CardPageVisits';
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

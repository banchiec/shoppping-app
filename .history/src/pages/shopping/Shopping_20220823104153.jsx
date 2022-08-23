import CardLineChart from '../../components/Cards/CardLineChart';
import CardPageVisits from '../../components/Cards/CardPageVisits';
import { ContainerShopping } from './shoppingStyled';

function Shopping(props) {
  console.log(props);
  return (
    <ContainerShopping>
      <CardPageVisits/>
      <h1>Container</h1>
    </ContainerShopping>
  );
}
export default Shopping;

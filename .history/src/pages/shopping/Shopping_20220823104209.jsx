import CardBarChart from '../../components/Cards/CardBarChart';
import CardLineChart from '../../components/Cards/CardLineChart';
import CardPageVisits from '../../components/Cards/CardPageVisits';
import { ContainerShopping } from './shoppingStyled';

function Shopping(props) {
  console.log(props);
  return (
    <ContainerShopping>
      <CardPageVisits/>
      <CardBarChart/>
    </ContainerShopping>
  );
}
export default Shopping;

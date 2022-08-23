import "../../../App.css";
import ShoppingMenu from './components/ShoppingMenu/shopppingMenu'

function Shopping(props) {
  console.log(props);
  return (
    <div className="App">
		<ShoppingMenu/>
		<h1>Shopping</h1>
    </div>
  );
}

export default Shopping;

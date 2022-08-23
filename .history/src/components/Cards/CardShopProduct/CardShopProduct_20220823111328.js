import { ContainerCardShop } from "./CardShopProductStyled"

const CardShopProduct = () => {
	return(
		<ContainerCardShop>
			<div>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU' alt='imagen_product'/>
				<div className='container_description'>
					<h2>Title</h2>
					<p>Description</p>
				</div>
			</div>
		</ContainerCardShop>
	)
}
export default CardShopProduct
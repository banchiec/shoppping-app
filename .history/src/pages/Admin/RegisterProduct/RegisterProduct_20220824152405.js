import Sidebar from "../../../components/Sidebar/Sidebar"
import { ContainerForm, ContainerMiniGalery, ContainerRegister } from "./registerProductStyled"

const RegisterProduct = () => {
	return (
		<ContainerRegister>
			<Sidebar/>
			<ContainerForm>
				<form>

				</form>
				<ContainerMiniGalery>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU' alt='imagen_product'/>
				</ContainerMiniGalery>
			</ContainerForm>
		</ContainerRegister>
	)
}

export default RegisterProduct



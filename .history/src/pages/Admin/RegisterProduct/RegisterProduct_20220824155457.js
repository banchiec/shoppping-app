import Sidebar from "../../../components/Sidebar/Sidebar"
import { ContainerForm, ContainerMiniGalery, ContainerRegister, ContainerRegisterGalery } from "./registerProductStyled"

const RegisterProduct = () => {
	return (
		<ContainerRegister>
			<Sidebar/>
			<ContainerForm>

				<ContainerRegisterGalery></ContainerRegisterGalery>
				<ContainerRegisterGalery>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU' alt='imagen_product'/>
					<ContainerMiniGalery>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU' alt='imagen_product'/>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU' alt='imagen_product'/>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU' alt='imagen_product'/>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU' alt='imagen_product'/>
					</ContainerMiniGalery>
				</ContainerRegisterGalery>
			</ContainerForm>
		</ContainerRegister>
	)
}

export default RegisterProduct



import Sidebar from "../../../components/Sidebar/Sidebar"
import { ContainerForm, ContainerMiniGalery, ContainerRegister, ContainerRegisterGalery, FormControl, Input } from "./registerProductStyled"

const RegisterProduct = () => {
	return (
		<ContainerRegister>
			<Sidebar/>
			<ContainerForm>
				<form>
					<FormControl>
						<Input type="text" placeholder='Introduce Nombre'/>
					</FormControl>
				</form>
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



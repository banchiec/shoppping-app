import FooterAdmin from "../../../components/Footers/FooterAdmin"
import Sidebar from "../../../components/Sidebar/Sidebar"
import { ButtonRegister, ContainerForm, ContainerMiniGalery, ContainerRegister, ContainerRegisterForm, ContainerRegisterGalery, FormControl, Input } from "./registerProductStyled"

const RegisterProduct = () => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')
	const [size, setSize] = useState('')
	const [beloning, setBeloning] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("handle");
	}

	return (
		<ContainerRegister>
			<Sidebar/>
			<ContainerForm>
				<ContainerRegisterForm>
					<h2>Registrar Producto</h2>
					<FormControl  onClick = {(e) => handleSubmit(e)}>
						<Input type="text"  placeholder='Introduce Nombre'/>
						<Input type="text" placeholder='Introduce Descripción'/>
						<Input type="text" placeholder='Introduce  '/>
						<Input type="text" placeholder='Introduce Nombre'/>
						<Input type="text" placeholder='Introduce Nombre'/>
						<Input type="text" placeholder='Introduce Nombre'/>
						<ButtonRegister type='submit'>Registrar</ButtonRegister>
					</FormControl>
				</ContainerRegisterForm>
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
			<FooterAdmin/>
		</ContainerRegister>
	)
}

export default RegisterProduct



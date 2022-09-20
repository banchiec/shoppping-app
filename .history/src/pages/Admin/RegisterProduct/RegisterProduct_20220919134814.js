import { useState } from 'react'
import FooterAdmin from '../../../components/Footers/FooterAdmin'
import Sidebar from '../../../components/Sidebar/Sidebar'
import {
	ButtonRegister,
	ContainerRegister,
	ContainerMiniGalery,
	Container,
	ContainerForm,
	ContainerRegisterGalery,
	FormControl,
	Input,
} from './registerProductStyled'

const RegisterProduct = () => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')
	const [size, setSize] = useState([])
	const [beloning, setBeloning] = useState({})
	const [photos, setPhotos] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('handle')
	}

	return (
		<Container>
			<Sidebar />
			<ContainerRegister>
				<ContainerForm>
					<h2>Registrar Producto</h2>
					<FormControl onClick={(e) => handleSubmit(e)}>
						<Input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							name="name"
							placeholder="Introduce Nombre"
						/>
						<Input
							type="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							name="description"
							placeholder="Introduce Descripción"
						/>
						<Input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							name="price"
							placeholder="Precio"
						/>
						<Input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							name="price"
							placeholder="Precio"
						/>
						<Input
							type="number"
							accept=".jpg,.jpeg, .png"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							name="price"
							placeholder="Precio"
						/>
						<ButtonRegister type="submit">Registrar</ButtonRegister>
					</FormControl>
				</ContainerForm>
				<ContainerRegisterGalery>
					<img
						src="https://w7.pngwing.com/pngs/296/367/png-transparent-shoe-sneakers-graphy-canvas-cartoon-shoes-miscellaneous-white-photography-thumbnail.png"
						alt="imagen_product"
					/>
					<ContainerMiniGalery>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU"
							alt="imagen_product"
						/>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU"
							alt="imagen_product"
						/>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU"
							alt="imagen_product"
						/>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgizgAaMI1f4xRgRBx1le3k7lOG_0gZCVqQ&usqp=CAU"
							alt="imagen_product"
						/>
					</ContainerMiniGalery>
				</ContainerRegisterGalery>
			</ContainerRegister>
			<FooterAdmin />
		</Container>
	)
}
export default RegisterProduct

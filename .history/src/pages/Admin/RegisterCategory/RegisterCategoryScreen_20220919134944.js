import { useState } from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import {
	ButtonRegister,
	Container,
	ContainerForm,
	ContainerRegister,
	FormControl,
	Input,
	TitleRegister,
} from './styles/registerCategoryScreenStyled'

const RegisterCategory = () => {
	const [name, setName] = useState('')
	const [subCategory, setSubCategory] = useState([])
	const [photo, setPhoto] = useState([])

	return (
		<Container>
			<Sidebar />
			<ContainerRegister>
				<ContainerForm>
					<TitleRegister>Registrar Categoria</TitleRegister>
					<FormControl>
						<Input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							name="name"
							placeholder="Introduce Nombre"
						/>
						{/* <Input
							type="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							name="description"
							placeholder="Introduce Descripción"
						/> */}
						<Input
							type="file"
							accept=".jpg,.jpeg,.png"
							value={photo}
							onChange={(e) => setPhoto(e.target.)}
							name="photo"
							placeholder="Photo"
						/>
						{/* <Input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							name="price"
							placeholder="Precio"
						/> */}
						{/* <Input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							name="price"
							placeholder="Precio"
						/> */}
						<ButtonRegister type="submit">Registrar</ButtonRegister>
					</FormControl>
				</ContainerForm>
			</ContainerRegister>
		</Container>
	)
}
export default RegisterCategory

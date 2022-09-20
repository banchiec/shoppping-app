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
	const [description, setDescription] = useState('')
	const [subCategory]
	const [price, setPrice] = useState(0)

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
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							name="price"
							placeholder="Precio"
						/>
						<ButtonRegister type="submit">Registrar</ButtonRegister>
					</FormControl>
				</ContainerForm>
			</ContainerRegister>
		</Container>
	)
}
export default RegisterCategory
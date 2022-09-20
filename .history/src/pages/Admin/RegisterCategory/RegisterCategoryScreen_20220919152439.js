import { useState } from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import {
	ButtonRegister,
	Container,
	ContainerForm,
	ContainerRegister,
	FormControl,
	Input,
	InputImage,
	TitleRegister,
} from './styles/registerCategoryScreenStyled'

const RegisterCategory = () => {
	const [name, setName] = useState('')
	// const [subCategory, setSubCategory] = useState([])
	const [photo, setPhoto] = useState('')

	const handleSelectImage = (e) => {
		console.log(e.target.files)
		setPhoto(e?.target?.files[0])
	}

	console.log(photo)

	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<Container>
			<Sidebar />
			<ContainerRegister>
				<ContainerForm>
					<TitleRegister> Registrar Categoria </TitleRegister>
					<form onSubmit={handleSubmit} encType="multipart/form-data">
						<FormControl>
							{/* <Input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								name="name"
								placeholder="Introduce Nombre"
							/> */}

							{/* <Input
								type="text"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								name="description"
								placeholder="Introduce Descripción"
							/> */}

							<input
								id="imgCategory"
								type="file"
								accept=".jpg,.jpeg,.png"
								onChange={(e) => handleSelectImage(e)}
								name="photo"
								value={''}
								placeholder="Photo category"
								multiple
							/>
							{photo? }

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
					</form>
				</ContainerForm>
			</ContainerRegister>
		</Container>
	)
}
export default RegisterCategory

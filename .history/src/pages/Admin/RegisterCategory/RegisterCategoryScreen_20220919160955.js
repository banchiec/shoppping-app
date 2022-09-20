import axios, { Axios } from 'axios'
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
	const [subCategory, setSubCategory] = useState([])
	const [photo, setPhoto] = useState('')

	const handleSelectImage = (e) => {
		setPhoto(e?.target?.files[0])
	}

	console.log(photo)

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('photo', photo)
		formData.append('name', name)
		formData.append('subCategory', subCategory)
		axios.post('http://localhost:5000')
	}
	return (
		<Container>
			<Sidebar />
			<ContainerRegister>
				<ContainerForm>
					<TitleRegister> Registrar Categoria </TitleRegister>
					<FormControl onSubmit={handleSubmit} encType="multipart/form-data">
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

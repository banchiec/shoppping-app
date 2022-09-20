import Sidebar from '../../../components/Sidebar/Sidebar'
import { Container, ContainerRegister, FormControl } from './styles/registerCategoryScreenStyled'

const RegisterCategory = () => {
	return (
		<Container>
			<Sidebar />
			<ContainerRegister>
				<FormControl></FormControl>

			</ContainerRegister>
		</Container>
	)
}
export default RegisterCategory

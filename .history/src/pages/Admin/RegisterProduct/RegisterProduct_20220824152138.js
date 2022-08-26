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
					<img src=''/>
				</ContainerMiniGalery>
			</ContainerForm>
			<h1>Register</h1>
		</ContainerRegister>
	)
}
export default RegisterProduct 
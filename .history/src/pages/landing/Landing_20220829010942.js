import CustomButton from "../../components/Buttons/CustomButton/CustomButton"
import FooterMobileLanding from "../../components/Footers/FooterMobileLanding/FooterMobileLanding"
import { ContainerLanding, Input } from "./landingStyled"

const Landing = () => {
	return (
		<ContainerLanding>
			<div>
				<img src='https://1000marcas.net/wp-content/uploads/2021/05/Badoo-Logo.png'/>
				<p>
					A quicker, easier way to date
				</p>
			</div>
			<form>
				<Input placeholder='Enter your email'/>
				<CustomButton/>
				<span>Sign up with phone number instead</span>
				<p>OR</p>
			</form>
			<FooterMobileLanding/>
		</ContainerLanding>
	)
}
export default Landing
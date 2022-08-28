import CustomButton from "../../components/Buttons/CustomButton/CustomButton"
import FooterMobileLanding from "../../components/Footers/FooterMobileLanding/FooterMobileLanding"
import { ContainerLanding } from "./landingStyled"

const Landing = () => {
	return (
		<ContainerLanding>
			<div>

			<img src='https://1000marcas.net/wp-content/uploads/2021/05/Badoo-Logo.png'/>
			A quicker, easier way to date
			</div>
			<form>
				<CustomButton/>
				<CustomButton/>
				<CustomButton/>
				<CustomButton/>
				<CustomButton/>
				<CustomButton/>
				<CustomButton/>
			</form>
			<FooterMobileLanding/>
		</ContainerLanding>
	)
}
export default Landing
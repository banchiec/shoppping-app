import CustomButton from "../../components/Buttons/CustomButton/CustomButton"
import FooterMobileLanding from "../../components/Footers/FooterMobileLanding/FooterMobileLanding"
import { ContainerLanding } from "./landingStyled"

const Landing = () => {
	return (
		<ContainerLanding>
			A quicker, easier way to date
			<form>
				<CustomButton/>
			</form>
			<FooterMobileLanding/>
		</ContainerLanding>
	)
}
export default Landing
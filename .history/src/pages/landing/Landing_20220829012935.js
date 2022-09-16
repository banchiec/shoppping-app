import CustomButton from "../../components/Buttons/CustomButton/CustomButton"
import FooterMobileLanding from "../../components/Footers/FooterMobileLanding/FooterMobileLanding"
import { ContainerLanding, Input } from "./landingStyled"
import {BsApple} from 'react-icons/bs'

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
				<CustomButton
					text='Sign up'
				/>
				<span>Sign up with phone number instead</span>
				<p>OR</p>
				<CustomButton
					icon={`${<BsApple/>}`}
					text={`Continue with Apple`}
					color='#000000'
				/>
				<CustomButton
					text='Continue with Facebook'
					color='#1778f2'
				/>
			</form>
			<FooterMobileLanding/>
		</ContainerLanding>
	)
}
export default Landing
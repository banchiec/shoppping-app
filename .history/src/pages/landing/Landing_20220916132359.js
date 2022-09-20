import CustomButton from "../../components/Buttons/CustomButton/CustomButton"
import {BsApple, BsFacebook} from 'react-icons/bs'
import {ContainerLanding} from './'

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
					color='#693BF3'
				/>
				<CustomButton
					text='Sign up with phone number instead'
					textColor= '#693BF3'
				/>
				<br/>
				<br/>
				<br/>
				<p>OR</p>
				<CustomButton
					icon= {<BsApple/>}
					text={`Continue with Apple`}
					color='#000000'
				/>
				<CustomButton
					icon= {<BsFacebook/>}
					text='Continue with Facebook'
					color='#1778f2'
				/>
				<span className='sub_info'>Don`t worry! We never post on Facebook</span>
				<br/>
				<br/>
				<br/>
				<span>Already have an account?</span>
			</form>
			<div className='footer'>
				<img src='https://e7.pngegg.com/pngimages/718/1015/png-clipart-app-store-apple-google-play-apple-text-logo.png'/>
				<div>
					<p>By signing up, you agree to our <a src='#'>Terms and Conditions.</a></p>
					<p>Learn how we use your data in our <a src='#'>Privacy Policy.</a></p>
				</div>
				<div>
					<ul>
						<li>
							<a src='#'> Manage Cookies</a>
						</li>
						<li>
							<a src='#'>Help</a>
						</li>
						<li>
							<a src='#'> Safely centre</a>
						</li>
						<li>
							<a src='#'> Interface language</a>
						</li>
						<li>
							<a src='#'>  Dating in the United Kingdom</a>
						</li>
						<li>
							<a src='#'> Chat in the United Kingdom</a>
						</li>
					</ul>
				</div>
			</div>
		</ContainerLanding>
	)
}
export default Landing
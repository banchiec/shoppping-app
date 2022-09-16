import {Button} from './customButtonStyled'
const CustomButton = ({ type, text, color }) =>{
	return(
		<Button 
			type={type} 
			buttonColor={color}
		>
			{text}
		</Button>
	)
}
export default CustomButton
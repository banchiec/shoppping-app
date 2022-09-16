import {Button} from './customButtonStyled'
const CustomButton = ({ type, text, color, icon}) =>{
	return(
		<Button 
			type={type} 
			buttonColor={color}
		>
			{icon}
			{text}
		</Button>
	)
}
export default CustomButton
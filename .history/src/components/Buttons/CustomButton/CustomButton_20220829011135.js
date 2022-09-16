import {Button} from './customButtonStyled'
const CustomButton = ({ type, text }) =>{
	return(
		<Button type={type}>{text}</Button>
	)
}
export default CustomButton
import { Button } from './customButtonStyled'
const CustomButton = ( type, text, color, icon, textColor }) => {
  return (
		<Button
			type={type}
			buttonColor={color}
			textColor={textColor}
		>
			{icon}
			{text}
		</Button>
  )
}
export default CustomButton

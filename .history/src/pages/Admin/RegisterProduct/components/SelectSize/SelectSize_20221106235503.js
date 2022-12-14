import { SelectContainer, Size } from './selectSizeStyled'

const SelectSize = () => {
	return (
		<SelectContainer>
			<Size>
				<label>xs</label>
			</Size>
			<Size>S</Size>
			<Size>M</Size>
			<Size>L</Size>
		</SelectContainer>
	)
}
export default SelectSize

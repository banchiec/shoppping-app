import { SelectContainer, Size } from './selectSizeStyled'

const SelectSize = () => {
	return (
		<SelectContainer>
			<Size>
				<label>XS</label>
			</Size>
			<Size>
				<label>S</label>
			</Size>
			<Size>
				<label>M</label>
			</Size>
			<Size>
				<label>L</label>
			</Size>
			<Size>
				<label>xl</label>
			</Size>
		</SelectContainer>
	)
}
export default SelectSize

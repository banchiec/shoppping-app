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
				<label>m</label>
			</Size>
			<Size>
				<label>l</label>
			</Size>
			<Size>
				<label>xl</label>
			</Size>
		</SelectContainer>
	)
}
export default SelectSize

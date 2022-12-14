import { SelectContainer, Size } from './selectSizeStyled'

const SelectSize = () => {
	return (
		<SelectContainer>
			<Size>
				<label>xs</label>
			</Size>
			<Size>
				<label>s</label>
			</Size>
			<Size>
				<label>m</label>
			</Size>
			<Size>
				<label>l</label>
			</Size>
		</SelectContainer>
	)
}
export default SelectSize

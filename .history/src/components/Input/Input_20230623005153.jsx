export const Input = ({ value, handleInputChange, placeholder }) => {
	return (
		<div className="">
			<input
				className="form-control"
				placeholder={placeholder}
				id="input-username"
				type="text"
				name="username"
				value={value}
				onChange={handleInputChange}
				required
			/>
		</div>
	)
}
export default Input

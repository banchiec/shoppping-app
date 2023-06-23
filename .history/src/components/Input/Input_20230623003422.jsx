export const Input = ({ value, handleInputChange }) => {
	return (
		<div className="">
			<input
				className="form-control"
				placeholder="Enter Email Address"
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

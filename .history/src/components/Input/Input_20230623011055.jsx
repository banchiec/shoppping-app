export const Input = ({ value, handleInputChange, placeholder }) => {
	return (
		<div className="form-group mb-4">
			<label htmlFor="#">Enter Username</label>
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

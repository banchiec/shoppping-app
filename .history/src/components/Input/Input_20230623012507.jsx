export const Input = ({ value, handleInputChange, placeholder, className }) => {
	return (
		<div className="form-group mb-4">
			<label htmlFor="#">Enter Username</label>
			<input
				className="form-control"
				placeholder="Enter Email Address"
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

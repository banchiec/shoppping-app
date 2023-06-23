export const Input = () => {
	return (
		<div className="">
			<input
				className="form-control"
				placeholder="Enter Email Address"
				id="input-username"
				type="text"
				name="username"
				value={username}
				onChange={handleInputChange}
				required
			/>
		</div>
	)
}
export default Input

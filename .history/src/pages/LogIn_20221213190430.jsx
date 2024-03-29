import React, { useState } from 'react'
import { login } from '../services/auth'
import { useNavigate } from 'react-router-dom'
import './Signup'
import * as PATHS from '../utils/paths'
import * as USER_HELPERS from '../utils/userToken'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/reducers/authReducers'

export default function LogIn({ authenticate }) {
	const { successLogin, user } = useSelector((state) => state.authLogin)
	const dispatch = useDispatch()
	const [form, setForm] = useState({
		username: '',
		password: '',
	})
	const { username, password } = form
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	function handleInputChange(event) {
		const { name, value } = event.target
		return setForm({
			...form,
			[name]: value,
		})
	}

	async function handleFormSubmission(event) {
		event.preventDefault()

		const credentials = {
			username,
			password,
		}

		dispatch(loginUser(credentials))
		if()
		// console.log('object')
		// login(credentials).then((res) => {
		// 	if (!res.status) {
		// 		return setError({ message: 'Invalid credentials' })
		// 	}
		// 	USER_HELPERS.setUserToken(res.data.accessToken)
		// 	console.log(USER_HELPERS.getUserToken())
		// 	console.log(res.data.user)
		// 	authenticate(res.data.user)
		// 	navigate(PATHS.HOMEPAGE)
		// })
	}

	return (
		<div>
			<h1>Log In</h1>
			<form onSubmit={handleFormSubmission} className="signup__form">
				<label htmlFor="input-username">Username</label>
				<input
					id="input-username"
					type="text"
					name="username"
					placeholder="username"
					value={username}
					onChange={handleInputChange}
					required
				/>

				<label htmlFor="input-password">Password</label>
				<input
					id="input-password"
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={handleInputChange}
					required
					minLength="8"
				/>

				{error && (
					<div className="error-block">
						<p>There was an error submiting the form:</p>
						<p>{error.message}</p>
					</div>
				)}

				<button className="button__submit" type="submit">
					Submit
				</button>
			</form>
		</div>
	)
}

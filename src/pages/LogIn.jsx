import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup'
import * as PATHS from '../utils/paths'
import { useDispatch, useSelector } from 'react-redux'
import { getLogin } from '../redux/actions/authActions'
import { useEffect } from 'react'

export default function LogIn({ authenticate }) {
	const { successLogin } = useSelector((state) => state.authLogin)
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

	useEffect(() => {
		if (successLogin) {
			navigate(PATHS.HOMEPAGE)
		}
	}, [successLogin])

	async function handleFormSubmission(event) {
		event.preventDefault()

		const credentials = {
			username,
			password,
		}
		dispatch(getLogin(credentials))
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

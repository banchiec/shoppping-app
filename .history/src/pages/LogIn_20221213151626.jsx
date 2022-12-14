import React, { useEffect, useRef, useState } from 'react'
import { login } from '../services/auth'
import { useNavigate } from 'react-router-dom'
import './Signup'
import * as PATHS from '../utils/paths'
import * as USER_HELPERS from '../utils/userToken'
import { loginUser } from '../redux/reducers/authReducers'
// import { useLoginMutation } from './authApiSlice'
// import { useDispatch } from 'react-redux'

export default function LogIn({ authenticate }) {
	// const useRef = useRef()
	// const dispatch = useDispatch()

	const errRef = useRef()
	const [user, setUser] = useState('')
	const [pwd, setPwd] = useState('')
	const [errMsg, setErrorMsg] = useState('')

	const [form, setForm] = useState({
		username: '',
		password: '',
	})
	const { username, password } = form
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	function handleInputChange(event) {
		const { name, value } = event.target

		return setForm({ ...form, [name]: value })
	}
	useEffect(() => {
		setErrorMsg('')
	}, [user, pwd])

	async function handleFormSubmission(event) {
		event.preventDefault()

			const useDat = await login({ user, pwd }).unwrap()
			console.log(useDat)
		} catch (err) {}

		const credentials = {
			username,
			password,
		}
		login(credentials).then((res) => {
			if (!res.status) {
				return setError({ message: 'Invalid credentials' })
			}
			USER_HELPERS.setUserToken(res.data.accessToken)
			console.log(USER_HELPERS.getUserToken())
			console.log(res.data.user)
			authenticate(res.data.user)
			navigate(PATHS.HOMEPAGE)
		})
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

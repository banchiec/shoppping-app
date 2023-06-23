import React, { useState } from "react"
import { signup } from "../services/auth"
import { useNavigate } from "react-router-dom"
import "./auth.css"
import * as PATHS from "../utils/paths"
import * as USER_HELPERS from "../utils/userToken"

export default function Signup({ authenticate }) {
	const [form, setForm] = useState({
		username: "",
		password: "",
	})
	const { username, password } = form
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	function handleInputChange(event) {
		const { name, value } = event.target
		return setForm({ ...form, [name]: value })
	}

	function handleFormSubmission(event) {
		event.preventDefault()
		const credentials = {
			username,
			password,
		}
		signup(credentials).then((res) => {
			if (!res.status) {
				// unsuccessful signup
				console.error("Signup was unsuccessful: ", res)
				return setError({
					message: "Signup was unsuccessful! Please check the console.",
				})
			}
			// successful signup
			USER_HELPERS.setUserToken(res.data.accessToken)
			authenticate(res.data.user)
			navigate(PATHS.HOMEPAGE)
		})
	}

	return (
		<div>
			<div className="signUp-container">
				<div className="account section">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6">
								<div className="login-form border p-5">
									<div className="text-center heading">
										<h2 className="mb-2">Sign Up</h2>
										<p className="lead">
											Already have an account? <a href="/login"> Login now</a>
										</p>
									</div>

									<form action="#">
										<div className="form-group mb-4">
											<label htmlFor="#">Enter Email Address</label>
											<input
												id="input-username"
												type="text"
												name="username"
												placeholder="Text"
												value={username}
												onChange={handleInputChange}
												required
											/>
										</div>
										<div className="form-group mb-4">
											<label htmlFor="#">Enter username</label>
											<a className="float-right" href="">
												Forget password?
											</a>
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
										</div>

										<div className="form-group mb-4">
											<label htmlFor="#">Enter Password</label>
											<input type="text" className="form-control" placeholder="Enter Password" />
										</div>
										<div className="form-group">
											<label htmlFor="#">Confirm Password</label>
											<input type="text" className="form-control" placeholder="Confirm Password" />
										</div>
										{error && (
											<div className="error-block">
												<p>There was an error submiting the form:</p>
												<p>{error.message}</p>
											</div>
										)}
										<a href="#" className="btn btn-main mt-3 btn-block button__submit">
											Signup
										</a>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h1>Sign Up</h1>

			<form onSubmit={handleFormSubmission} className="auth__form">
				<label htmlFor="input-username">Username</label>
				<input
					id="input-username"
					type="text"
					name="username"
					placeholder="Text"
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

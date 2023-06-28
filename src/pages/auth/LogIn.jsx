import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as PATHS from "../../utils/paths"
import { getLogin } from "../../redux/actions/authActions"
import "./styles.css"

export default function LogIn() {
	const { successLogin, errorLogin } = useSelector((state) => state.authLogin)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [form, setForm] = useState({
		username: "",
		password: "",
	})
	const { username, password } = form

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
	}, [successLogin, navigate])

	async function handleFormSubmission(event) {
		event.preventDefault()
		const credentials = {
			username,
			password,
		}
		dispatch(getLogin(credentials))
	}

	return (
		<div className="login-box">
			<h2>Log In</h2>
			<form onSubmit={handleFormSubmission}>
				<div className="login-field">
					<input
						type="text"
						name="username"
						value={username}
						onChange={handleInputChange}
						required
					/>
					<label htmlFor="input-username">Usuario</label>
				</div>
				<div className="login-field">
					<input
						type="password"
						name="password"
						// placeholder="Password"
						value={password}
						onChange={handleInputChange}
						required
						minLength="8"
					/>
					<label htmlFor="input-password">Contraseña</label>
					{errorLogin && (
						<div className="error-block">
							<p>Ha ocurrido un error por favor intentalo otra vez</p>
						</div>
					)}
				</div>
				<button type="submit">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Ingresar
				</button>
			</form>
		</div>
	)
}

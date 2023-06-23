import { useEffect, useState } from "react"
import { Routes, Route, Redirect } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import routes from "./config/routes"
import * as USER_HELPERS from "./utils/userToken"
import { loggedInSession, logoutSession } from "./redux/actions/authActions"
import { useDispatch } from "react-redux"
import "./assets/css/style.css"

export default function App() {
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const dispatch = useDispatch()

	useEffect(() => {
		const accessToken = USER_HELPERS.getUserToken()
		if (!accessToken) {
			return setIsLoading(false)
		}
		dispatch(loggedInSession())
	}, [user])

	function handleLogout() {
		const accessToken = USER_HELPERS.getUserToken()
		if (!accessToken) {
			setUser(null)
			return setIsLoading(false)
		}
		setIsLoading(true)
		dispatch(logoutSession())
	}

	function authenticate(user) {
		setUser(user)
	}

	return (
		<div className="App">
			<Navbar handleLogout={handleLogout} user={user} />
			<Routes>
				{routes({ user, authenticate, handleLogout }).map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
				<Redirect to="/" />
			</Routes>
		</div>
	)
}

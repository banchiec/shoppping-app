import { useEffect, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import routes from "./config/routes"
import * as USER_HELPERS from "./utils/userToken"
import { loggedInSession, logoutSession } from "./redux/actions/authActions"
import { useDispatch } from "react-redux"
import { userProps } from "./redux/reducers/authReducers"

export default function App() {
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const dispatch: any | void = useDispatch()

	useEffect(() => {
		const accessToken = USER_HELPERS.getUserToken()
		if (!accessToken) {
			return setIsLoading(false)
		}
		dispatch(loggedInSession())
	}, [user, dispatch])

	const handleLogout = () => {
		const accessToken = USER_HELPERS.getUserToken()
		if (!accessToken) {
			setUser(null)
			return setIsLoading(false)
		}
		setIsLoading(true)
		dispatch(logoutSession())
	}

	function authenticate(user: userProps | null | undefined | any) {
		setUser(user)
	}

	return (
		<div className="App">
			{isLoading}
			<Navbar />
			<Routes>
				{routes({ user, authenticate, handleLogout }).map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</div>
	)
}

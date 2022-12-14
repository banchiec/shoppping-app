import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectCurrenToken } from './authSlice'

const RequierAuth = () => {
	const token = useSelector(selectCurrenToken)
	const location = useLocation()

	return (
		token ? <
	)
}

export default RequireAuth
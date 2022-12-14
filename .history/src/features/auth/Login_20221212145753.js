import { userRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import useLoginMutation from './authApiSlice'

const Login = () => {
	const useRef = useRef()
	const errRef = useRef()
	const [ user, setUser ] = useState('')
	const [ pwd, setPwd ] = useState('')
	const [ errMsg, setErrMsg ] = useState('')
	const navigate = useNavigate()

	const [ login, { isLoading } ] = useLoginMutation()
	const dispatch = useDispatch()
	
	useEffect(() => {
		userRef.
	}, [])


	return (
		<div>Login</div>
	)
}
export default Login
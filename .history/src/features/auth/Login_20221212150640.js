import { userRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import useLoginMutation from './authApiSlice'

const Login = () => {
	const useRef = useRef()
	const errRef = useRef()
	const [user, setUser] = useState('')
	const [pwd, setPwd] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const navigate = useNavigate()

	const [login, { isLoading }] = useLoginMutation()
	const dispatch = useDispatch()

	useEffect(() => {
		userRef.current.focus()
	}, [])

	useEffect(() => {
		setErrMsg('')
	}, [user, pwd])

	const handleSubmit = async (e) => {
		e.preventDefault(e)
		try {
			const userData = await login({ user, pwd }).unwrap()
			dispatch(setCredentials({ ...userData, user }))
			setUser('')
			setPwd('')
			navigate('/welcome')
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No server Response')
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password')
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized')
			} else {
				setErrMsg('Login Failed')
			}
			errRef.current.focus()
		}
	}

	const handleUserInput = (e) => setUser(e.target.value)
	const handlePwdInput = (e) => setPwd(e.target.value)

	const content = isLoading? 
	return <div>Login</div>
}
export default Login

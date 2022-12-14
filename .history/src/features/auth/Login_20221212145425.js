import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import useLoginMutation from './authApiSlice'

const Login = () => {
	return (
		<div>Login</div>
	)
}
export default Login
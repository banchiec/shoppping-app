import { ERROR_LOGIN, LOADING_LOGIN, SUCCESS_LOGIN } from '../constants/authConstants'

export const getLoadingUserLogin = () => ({
	type: LOADING_LOGIN,
})

export const getSuccessUserLogin = (payload) => ({
	type: SUCCESS_LOGIN,
	payload,
})

export const getErrorUserLogin = (error) => ({
	type: ERROR_LOGIN,
	error,
})

export const 
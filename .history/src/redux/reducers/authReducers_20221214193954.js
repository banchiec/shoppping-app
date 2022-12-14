import { SESSION_IN, SESSSION_OUT } from '../constants/authConstants'
import { LOADING_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from '../constants/authConstants'

const initialState = {
	loadingLogin: false,
	successLogin: false,
	errorLogin: false,
	user: {},
	accessToken: '',
}

export const loginReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOADING_LOGIN:
			return {
				...state,
				loadingLogin: true,
			}
		case SUCCESS_LOGIN:
			return {
				...state,
				loadingLogin: false,
				successLogin: true,
				user: action.payload.user,
				accessToken: action.payload.accessToken,
			}
		case ERROR_LOGIN:
			return {
				...state,
				loadingLogin: false,
				successLogin: false,
				errorLogin: true,
			}
		case SESSION_IN:
			return {
				...state,
				user: action.payload,
			}
		case SESSSION_OUT:
			console.log(action.payload)
			return {
				...state,
				user: null,
			}

		default:
			return state
	}
}

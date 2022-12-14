import axios from 'axios'
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
		default:
			return state
	}
}

// export const loginUser = (credentials) => (dispatch) => {
// 	authService
// 		.post('/login', credentials)
// 		.then((response) => {
// 			return dispatch(getSuccessUserLogin(response.data))
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 			return err.status
// 		})
// 	return authService
// }

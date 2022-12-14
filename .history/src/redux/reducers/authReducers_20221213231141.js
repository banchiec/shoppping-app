import axios from 'axios'
import * as USER_HELPERS from '../../utils/userToken'
import { getSuccessUserLogin } from '../actions/authActions'
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

// thunk
function internalServerError(err) {
	if (err.response && err.response.data && err.response.data.errorMessage) {
		return {
			status: false,
			errorMessage: err.response.data.errorMessage,
		}
	}
	return {
		status: false,
		errorMessage: 'Internal server error. Please check your server',
	}
}

const authService = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
})

export const loginUser = (credentials) => (dispatch) => {
	authservice
		.post('/login', credentials)
		.then((response) => {
			return dispatch(getsuccessuserlogin(response.data))
		})
		.catch((err) => {
			console.log(err)
			return err.status
		})
	return authservice
}

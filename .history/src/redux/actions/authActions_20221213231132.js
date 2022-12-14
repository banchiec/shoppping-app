import axios from 'axios';
import { ERROR_LOGIN, LOADING_LOGIN, SUCCESS_LOGIN } from '../constants/authConstants'

const authService = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
})
export const getLogin = (credentials) => (dispatch) => {
	console.log("object");
	dispatch({type: LOADING_LOGIN})

}
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

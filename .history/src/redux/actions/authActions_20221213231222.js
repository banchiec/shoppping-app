import axios from 'axios';
import { ERROR_LOGIN, LOADING_LOGIN, SUCCESS_LOGIN } from '../constants/authConstants'

const authService = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
})
export const getLogin = (credentials) => (dispatch) => {
	console.log("object");
	dispatch({type: LOADING_LOGIN})
	authService
		.post('/login', credentials)
		.then((response) => {
			return dispatch({type: SUCCESS_LOGIN(response.data)})
		})
		.catch((err) => {
			console.log(err)
			return err.status
		})
	return authService

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

import axios from 'axios'
import { ERROR_LOGIN, LOADING_LOGIN, SUCCESS_LOGIN } from '../constants/authConstants'
import * as USER_HELPERS from '../../utils/userToken'

const authService = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
})
export const getLogin = (credentials) => (dispatch) => {
	dispatch({ type: LOADING_LOGIN })
	authService
		.post('/login', credentials)
		.then((response) => {

			return dispatch({ type: SUCCESS_LOGIN, payload: response.data })
		})
		.catch((err) => {
			return dispatch({ type:  ERROR_LOGIN, payload: err.message}) 
		})
	return authService
}

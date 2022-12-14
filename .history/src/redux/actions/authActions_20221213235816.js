import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ERROR_LOGIN, LOADING_LOGIN, SUCCESS_LOGIN } from '../constants/authConstants'
import * as PATHS from '../../utils/paths'
import * as USER_HELPERS from '../../utils/userToken'

const authService = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
})
export const getLogin = (credentials) => (dispatch) => {
	dispatch({ type: LOADING_LOGIN })
	authService
		.post('/login', credentials)
		.then((response) => {
			if (response.status === 200) {
				USER_HELPERS.setUserToken(response.data.accessToken)
				USER_HELPERS.setUserCurrent(response.data)
				return dispatch({ type: SUCCESS_LOGIN, payload: response.data })
			}
		})
		.catch((err) => {
			return dispatch({ type: ERROR_LOGIN, payload: err.message })
		})
	return authService
}

export const getLoginIn = () => (dispatch) => {
	authService
		.get('session', {
			headers: {
				Authorization: USER_HELPERS.getUserToken()
			},
		})
		.then((response) => {
			console.log(response);
		})
		.
}
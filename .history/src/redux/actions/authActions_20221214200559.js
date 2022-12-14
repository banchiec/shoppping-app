import axios from 'axios'
import {
	ERROR_LOGIN,
	LOADING_LOGIN,
	SESSION_IN,
	SESSION_OUT,
	SUCCESS_LOGIN,
} from '../constants/authConstants'
import * as PATHS from '../../utils/paths'
import * as USER_HELPERS from '../../utils/userToken'

const authService = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
})
export const getLogin = (credentials) => (dispatch) => {
	console.log(credentials)
	dispatch({ type: LOADING_LOGIN })
	authService
		.post('/login', credentials)
		.then((response) => {
			if (response.status === 200) {
				USER_HELPERS.setUserCurrent(response.data)
				USER_HELPERS.setUserCurrent(response.data)
				return dispatch({ type: SUCCESS_LOGIN, payload: response.data })
			}
		})
		.catch((err) => {
			return dispatch({ type: ERROR_LOGIN, payload: err.message })
		})
	return authService
}

export const loggedInSession = () => (dispatch) => {
	authService
		.get('session', {
			headers: {
				Authorization: USER_HELPERS.getUserToken(),
			},
		})
		.then((response) => {
			return dispatch({ type: SESSION_IN, payload: response.data.user })
		})
		.catch((err) => console.log(err))
}

export const logoutSession = () => (dispatch) => {
	authService
		.delete('/logout', {
			headers: {
				Authorization: USER_HELPERS.getUserToken(),
			},
		})
		.then((response) => {
			console.log(response);
			USER_HELPERS.removeUserToken()
			USER_HELPERS.removeUserCurrent()
			return dispatch({ type: SESSION_OUT, payload: response.data })
		})
		.catch((err) => {
			return err.status
		})
}

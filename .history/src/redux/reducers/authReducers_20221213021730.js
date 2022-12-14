import {
	LOGIN_LOADING,
} from '../constants/authConstants'

const initialState = {
	loadingLogin : false,
	successLogin: false,
	errorLogin: false
}

export const loginReducer = ( state = initialState, action = {}) => {
	switch(action.type) {
		case LOGIN_LOADING: 
			return {
				...state,

			}
			default: 
				return state
	}

}
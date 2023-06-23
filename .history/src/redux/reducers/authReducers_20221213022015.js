import {
	LOADING_LOGIN,
	SUCCESS_LOGIN,
	ERROR_LOGIN
} from '../constants/authConstants'

const initialState = {
	loadingLogin : false,
	successLogin: false,
	errorLogin: false
}

export const loginReducer = ( state = initialState, action = {}) => {
	switch(action.type) {
		case LOADING_LOGIN: 
			return {
				...state,
				loadingLogin: true
			}
			case SUCCESS_LOGIN:
				return {
					...state,
					loadingLogin: false,
					successLogin: true,
				}
				case ERROR_LOGIN: 
				return {
					...state,
					loadingLogin: false,
					successLogin: false,
					errorLogin: ''
				}
			default: 
				return state
	}

}
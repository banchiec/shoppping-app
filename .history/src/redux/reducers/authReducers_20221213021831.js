import {
	LOADING_LOGIN,
	SUCCE
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
			case 
			default: 
				return state
	}

}
import {
	LO,
} from '../constants/authConstants'

const initialState = {
	loginLoading : false,
	loginSuccess: false,
	loginError: false
}

export const loginReducer = ( state = initialState, action = {}) => {
	switch(action.type) {
		case LOGIN_LOADING: 
			return {
				...state,
				login

			}
			default: 
				return state
	}

}
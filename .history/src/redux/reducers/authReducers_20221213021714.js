import {
	LOGIN_LOADING,
} from '../constants/authConstants'

const initialState = {
	loading : false,
	loginSuccess: false,
	loginError: false
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
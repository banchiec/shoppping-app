import {
	LOGIN_LOADING,
} from '../'

const initialState = {
	loginLoading : false,
	loginSuccess: false,
	loginError: false
}

export const loginReducer = ( state = initialState, action = {}) => {
	switch(action.type) {
		case LOGIN_LOADING: 
	}

}
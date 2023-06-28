import { SESSION_IN, SESSION_OUT } from "../constants/authConstants"
import { LOADING_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from "../constants/authConstants"

export interface userProps {
	username: string
	password: string
}

interface initalStateProps {
	loadingLogin: boolean
	successLogin: boolean
	errorLogin: boolean
	user?: userProps | null
}
const initialState: initalStateProps = {
	loadingLogin: false,
	successLogin: false,
	errorLogin: false,
	user: null,
}

type loginActions =
	| { type: "LOADING_LOGIN"; payload: userProps | undefined | null }
	| { type: "SUCCESS_LOGIN"; payload: userProps | undefined | null }
	| { type: "ERROR_LOGIN"; payload: userProps | undefined | null }
	| { type: "SESSION_IN"; payload: userProps | undefined | null }
	| { type: "SESSION_OUT"; payload: userProps | undefined | null }

export const loginReducer = (
	state: initalStateProps = initialState,
	action: loginActions
): initalStateProps => {
	switch (action.type) {
		case LOADING_LOGIN:
			return {
				...state,
				loadingLogin: true,
			}
		case SUCCESS_LOGIN:
			return {
				...state,
				loadingLogin: false,
				successLogin: true,
				user: action.payload,
			}
		case ERROR_LOGIN:
			return {
				...state,
				loadingLogin: false,
				successLogin: false,
				errorLogin: true,
			}
		case SESSION_IN:
			return {
				...state,
				user: action.payload,
			}
		case SESSION_OUT:
			return {
				...state,
				successLogin: false,
				user: null,
			}

		default:
			return state
	}
}
export default loginReducer

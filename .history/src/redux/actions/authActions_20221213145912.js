import { LOADING_LOGIN, SUCCESS_LOGIN } from "../constants/authConstants";

export const getLoadingUserLogin = () => ({
	type: LOADING_LOGIN
})
export const getSuccessUserLogin = (payload
	) => ({
	type: SUCCESS_LOGIN
})

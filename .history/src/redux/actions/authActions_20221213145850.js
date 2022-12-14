import { LOADING_LOGIN } from "../constants/authConstants";

export const getLoadingUserLogin = () => ({
	type: LOADING_LOGIN
})
export const getSuccessUserLogin = () => ({
	type: SUCCESS_LOGIN
})

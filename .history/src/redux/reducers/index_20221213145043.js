import { combineReducers } from '@reduxjs/toolkit'
import { loginReducer } from './authReducers'

export const reducer = combineReducers({
	auth : loginReducer 
})

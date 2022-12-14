import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import authReducer from '../features/auth/authSlice'
import {apiSlice} from './api/apìSlice'

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		user: userReducer,
		auth: authReducer,
	},
	middleware: getDefaultMiddleware => 
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true
})
export default store

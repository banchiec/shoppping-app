import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userLogin: {
		user: {},
		loadingUserLogin: false,
		successUserLogin: false,
		errorUserLogin: false,
	},
	token: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { user, accessToken } = action.payload
			state.user = user
			state.token = accessToken
		},
		logOut: (state, action) => {
			state.user = null
			state.token = null
		},
	},
	extraReducers: (builder) => {
		builder.add
	}
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrenToken = (state) => state.auth.token

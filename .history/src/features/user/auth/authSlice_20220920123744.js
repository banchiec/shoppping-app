import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
	name: 'auht',
	initialState: { user: null, token: null },
	reducers: {
		setCredentials: (state, action) => {
			const { user, accessToken } = action.payload
			state.user = null
			state.token = null
		},
		logOut: (state, action) => {
			state.user = null
			state.token = null
		},
	},
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrenToken = (state) => state.auth.token

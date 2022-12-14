import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: 'auht',
	initialState: { user: null, token: null },
	reducers: {
		setCredentials: ( state, action ) => {
			const { user, accessToken} = action.payload
			state.user = null 
			state.token = null
		},
		
	}
})
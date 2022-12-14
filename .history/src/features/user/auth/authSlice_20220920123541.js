import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const authSlice = createSlice({
	name: 'auht',
	initialState: { user: null, token: null },
	reducers: {
		setCredentials: ( state, action ) => {
			const { user, accessToken} = action.payload
			state.user = null 
			state.token = null
		},
		logOut: ( state, action ) => {
			state.user = null
			stat
		}
	}
})
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: 'auht',
	initialState: {user: null, token: null},
	reducers: {
		setCredentials: (state, action ) => {

		}
	}
})
import { createSlice } from "@reduxjs/toolkit";
import { fetchUserLogin } from "./userApi";

const initialState = {
	isLoading: false,
	user: {}
}




const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		registrationPending: (state) => {
			state.isLoading = true
		}
	},
	extraReducers:  (builder) => {
		builder.addCase(fetchUserLogin.pending, (state) => {
				state.loadingUserLogin= true
		})
	}
})
const {reducer , actions } = userSlice

export const {
	registrationPending
} = actions 

export default reducer
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchloginUser = createAsyncThunk('user/fetchloginUser', (user) => {
	return axios
		.post('htt')
})
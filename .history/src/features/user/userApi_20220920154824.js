import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserLogin = createAsyncThunk('user/fetchUserLogin', (user) => {
	return axios
		.post('http//localhost:5005/api/login', user) 
		.then((response) => response.data)
})
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
	baseURL: 'http://localhost:3000',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token
		if (token) {
			headers.set('authorization', `Bearer ${token}`)
		}
		return headers
	},
})

const baseQueryWit
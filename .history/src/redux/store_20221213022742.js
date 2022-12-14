import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devTools-'
import thunk from "redux-thunk";
import { reducer } from './reducers'

export const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)
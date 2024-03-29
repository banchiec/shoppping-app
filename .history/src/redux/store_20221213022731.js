import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from ''
import thunk from "redux-thunk";
import { reducer } from './reducers'

export const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)
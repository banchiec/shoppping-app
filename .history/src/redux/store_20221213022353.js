import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { reducer } from './reducers'


export const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)
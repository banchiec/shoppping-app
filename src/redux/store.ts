import { applyMiddleware, createStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { reducer } from "./reducers/index"

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store

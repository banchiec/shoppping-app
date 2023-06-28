import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import store from "./redux/store"
import "./index.css"

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<App />} />
			</Routes>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
)

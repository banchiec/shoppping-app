import {Bro Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Public from './components/Layout/Public'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'

function App() {
	return (
		<>
    <BrowserRouter>
		<Routes>
		<Route path="/*" element={<App />} />
		</Routes>
		</BrowserRouter>
    </>

		// <Routes>
		// 	<Route path="/" element={<Layout/>}>
		//     {/* public routes */}
		//     <Route index element={<Public/>}></Route>
		//     <Route path='login' element={<Login/>}></Route>
		//     {/* protected routes */}

		//     <Route element={<RequireAuth/>}>
		//       <Route path="Welcome" element={<Welcome/>}></Route>
		//     </Route>
		//   </Route>
		// </Routes>
	)
}
export default App
// import { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import LoadingComponent from "./components/Loading";
// import Navbar from "./components/Navbar/Navbar";
// import { getLoggedIn, logout } from "./services/auth";
// import routes from "./config/routes";
// import * as USER_HELPERS from "./utils/userToken";

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const accessToken = USER_HELPERS.getUserToken();
//     if (!accessToken) {
//       return setIsLoading(false);
//     }
//     getLoggedIn(accessToken).then((res) => {
//       if (!res.status) {
//         return setIsLoading(false);
//       }
//       setUser(res.data.user);
//       setIsLoading(false);
//     });
//   }, []);

//   function handleLogout() {
//     const accessToken = USER_HELPERS.getUserToken();
//     if (!accessToken) {
//       setUser(null);
//       return setIsLoading(false);
//     }
//     setIsLoading(true);
//     logout(accessToken).then((res) => {
//       if (!res.status) {
//         // deal with error here
//         console.error("Logout was unsuccessful: ", res);
//       }
//       USER_HELPERS.removeUserToken();
//       setIsLoading(false);
//       return setUser(null);
//     });
//   }

//   function authenticate(user) {
//     setUser(user);
//   }

//   if (isLoading) {
//     return <LoadingComponent />;
//   }
//   return (
//     <div className="App">
//       <Navbar handleLogout={handleLogout} user={user} />
//       <Routes>
//         {routes({ user, authenticate, handleLogout }).map((route) => (
//             <Route key={route.path} path={route.path} element={route.element} />
//         ))}
//       </Routes>
//       </div>
//   );
// }

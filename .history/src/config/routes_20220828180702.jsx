import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
import RegisterProduct from "../pages/admin/RegisterProduct/RegisterProduct";
import Shopping from "../pages/shopping/Shopping";
import * as PATHS from "../utils/paths";
import Admin from "../layouts/Admin";
import Dashboard from "../pages/admin/Dashboard";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: user? (
        <Landing />
      ) : (
        <HomePage {...props} />,
      ) 
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },
    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.ADMINPAGE,
      element: <Admin {...props}/>
    },
    {
      path: PATHS.ADMINDASHBOARD,
      element: <Dashboard {...props}/>
    },
    {
      path: PATHS.SHOPPING,
      element: <Shopping{...props}/>
    },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.REGISTERPRODUCT,
      element: user ? (
        <RegisterProduct {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;

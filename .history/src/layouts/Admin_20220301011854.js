import React  from "react";
import {Route,Switch, Routes, BrowserRouter} from "react-router-dom";
import * as PATHS from "../utils/paths";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.";
import Sidebar from "../components/Sidebar/Sidebar"
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";
import FooterAdmin from "../components/Footers/FooterAdmin"

// views

import Dashboard from "../pages/admin/Dashboard"
// import Maps from "../pages/admin/Maps.js";
// import Settings from "../pages/admin/Settings.js";
// import Tables from "../pages/admin/Tables.js";

export default function Admin({Children}) {
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
      <Sidebar />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {Children}
          {/* <Routes> */}
            {/* <Route path={PATHS.ADMINDASHBOARD} exact component={Dashboard} /> */}
            {/* <Route path={PATHS.ADMINDASHBOARD} exact component={Dashboard} /> */}
            {/* <Route path="/admin/maps" exact component={Maps} /> */}
              {/*Routes <Route path="/admin/settings" exact component={Settings} /> */}
            {/* <Route path="/admin/tables" exact component={Tables} /> */}
          {/* </Routes> */}
            <FooterAdmin />
          </div>
      </div>
    </>
  );
}

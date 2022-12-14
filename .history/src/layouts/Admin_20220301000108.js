import React from "react";
import {Switch as  Switch, Route, Redirect } from "react-router-dom";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.";
import Sidebar from "../components/Sidebar/Sidebar"
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";
import FooterAdmin from "../components/Footers/FooterAdmin"

// views

import Dashboard from "../pages/Admin/Dashboard";
// import Maps from "../pages/admin/Maps.js";
// import Settings from "../pages/admin/Settings.js";
// import Tables from "../pages/admin/Tables.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Route>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            {/* <Route path="/admin/maps" exact component={Maps} /> */}
              {/* <Route path="/admin/settings" exact component={Settings} /> */}
            {/* <Route path="/admin/tables" exact component={Tables} /> */}
              {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
          </Route>
            <FooterAdmin />
          </div>
      </div>
    </>
  );
}

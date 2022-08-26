/*eslint-disable*/
import React from "react";
import { Link, Routes } from "react-router-dom";

import NotificationDropdown from "../Dropdowns/NotificationDropdown"
import UserDropdown from "../Dropdowns/UserDropdown.js";
import { ContainerSidebar } from "./sidebarStyled";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <ContainerSidebar>
      <ul>
        <Link>
        <li>Registrar producto</li>
        </Link>
        <li>Registrar producto</li>
        <li>Registrar producto</li>
        <li>Registrar producto</li>
      </ul>
    </ContainerSidebar>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import {AiOutlineMenu} from 'react-icons/ai'
import { FiLogIn, FiLogOut, FiUserPlus } from 'react-icons/fi'
import { BsHandbag, BsSearch} from 'react-icons/bs'
import { ContainerNavbar, MobileNav } from "./NavbarStyled";
import { useState } from "react";

const Navbar = (props) => {

  const [showSidebar, setShowSidebar] = useState(false)


  const handleShowSidebar = () => {
    setShowSidebar(false)
  }
  console.log(object);
  return (
    <ContainerNavbar>
        <AiOutlineMenu  onClick={(e) => handleShowSidebar(e)}/>
        <Link to={PATHS.HOMEPAGE} >
        </Link>
        <div className="nav_screen">
          <Link to={PATHS.SHOPPING} >
            Tienda 
          </Link>
          <Link to={PATHS.PROTECTEDPAGE} >
          </Link>
          <Link to={PATHS.PROTECTEDPAGE} >
            Novedades
          </Link>
          <Link to={PATHS.PROTECTEDPAGE} >
            Inspiración
          </Link>
          <Link to={PATHS.PROTECTEDPAGE} >
            Colecciones
          </Link>

          {/* <Link to={PATHS.PROTECTEDPAGE} >
            <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
          </Link>
          <Link to={PATHS.PROTECTEDPAGE} >
            <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
          </Link> */}
          {props.user ? (
            <>
              <Link to={PATHS.ADMINPAGE} >
                Admin
              </Link>
              {/* <button className="nav-logoutbtn" onClick={props.handleLogout}>
                Logout
              </button> */}
            </>
          ) : (
            <>
              {/* <Link to={PATHS.SIGNUPPAGE} >
                Signup
              </Link>
              <Link to={PATHS.LOGINPAGE} >
                Log In
              </Link> */}
            </>
          )}
        </div>
        <MobileNav>
          <div>
            {console.log(props.user)}
            {!props.user ? (
              <>
                {/* <Link to={PATHS.LOGINPAGE}>
                  <FiLogIn/>
                </Link>
                <Link to={PATHS.SIGNUPPAGE}>
                  <FiUserPlus/>
                </Link> */}
              </>
            ):( 
              <>
                <Link to={PATHS.HOMEPAGE}>
                  <FiLogOut onClick={props.handleLogout}/>
                </Link>
              </>
            )}
            <BsSearch/>
            <BsHandbag/>
          </div>
        </MobileNav>
        {showSidebar}
    </ContainerNavbar>
  );
};

export default Navbar;

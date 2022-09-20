import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import * as PATHS from '../../utils/paths'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { BsHandbag, BsSearch } from 'react-icons/bs'
import { ContainerNavbar, MobileNav } from './NavbarStyled'
import SidebarMobile from '../Sidebar/SidebarMobile.js/SidebarMobile'

const Navbar = (user, handleLogout) => {
	const [showSidebar, setShowSidebar] = useState(false)

	const handleShowSidebar = () => {
		setShowSidebar(true)
	}
	const handleCloseSidebar = () => {
		setShowSidebar(false)
	}

	return (
		<ContainerNavbar>
			<AiOutlineMenu onClick={(e) => handleShowSidebar(e)} />
			<Link to={PATHS.HOMEPAGE}></Link>
			<div className="nav_screen">
				<Link to={PATHS.SHOPPING}>Tienda</Link>
				<Link to={PATHS.PROTECTEDPAGE}></Link>
				<Link to={PATHS.PROTECTEDPAGE}>Novedades</Link>
				<Link to={PATHS.PROTECTEDPAGE}>Inspiración</Link>
				<Link to={PATHS.PROTECTEDPAGE}>Colecciones</Link>
				{user ? (
					<>
						<Link to={PATHS.ADMINPAGE}>Admin</Link>
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
					{console.log(user)}
					{!user ? (
						<>
							<Link to={PATHS.LOGINPAGE}>
                  <FiLogIn/>
                </Link>
                <Link to={PATHS.SIGNUPPAGE}>
                  <FiUserPlu/>
                </Link>
						</>
					) : (
						<>
							<Link to={PATHS.HOMEPAGE}>
								<FiLogOut onClick={handleLogout} />
							</Link>
						</>
					)}
					<BsSearch />
					<BsHandbag />
				</div>
			</MobileNav>
			{showSidebar && <SidebarMobile handleCloseSidebar={handleCloseSidebar} />}
		</ContainerNavbar>
	)
}

export default Navbar

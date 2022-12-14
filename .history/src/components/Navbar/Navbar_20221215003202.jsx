import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import * as PATHS from '../../utils/paths'
import { FiLogIn, FiLogOut, FiUserPlus } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
import { ContainerNavbar, MobileNav } from './NavbarStyled'
import { useDispatch, useSelector } from 'react-redux'
import { logoutSession } from '../../redux/actions/authActions'

const Navbar = (props) => {
	const { user } = useSelector((state) => state.authLogin)
	const [currentUser, setCurrentUser] = useState(null)
	const dispatch = useDispatch()

	useEffect(() => {
		setCurrentUser(user)
	}, [user])

	const handleLogout = () => {
		console.log('logout')
		dispatch(logoutSession())
	}

	return (
		<ContainerNavbar>
			<Link to={PATHS.HOMEPAGE}>
				{/* <img src='/casaverde_logo.png' alt="Logo" width={300} height={80}/> */}
			</Link>
			<div className="nav_screen">
				<Link to={PATHS.SHOPPING}>Tienda</Link>
				<Link to={PATHS.PROTECTEDPAGE}></Link>
				<Link to={PATHS.PROTECTEDPAGE}>Novedades</Link>
				<Link to={PATHS.PROTECTEDPAGE}>Inspiración</Link>
				<Link to={PATHS.PROTECTEDPAGE}>Colecciones</Link>

				{currentUser && (
					<>
						<Link to={PATHS.ADMINPAGE}>Admin</Link>
					</>
				)}
			</div>
			<MobileNav>
				<div>
					{currentUser ? (
						<>
							<Link to={PATHS.HOMEPAGE}>
								<FiLogOut onClick={() => handleLogout()} />
							</Link>
						</>
					) : (
						<>
							<Link to={PATHS.LOGINPAGE}>
								<FiLogIn />
							</Link>
							<Link to={PATHS.SIGNUPPAGE}>
								<FiUserPlus />
							</Link>
						</>
					)}
					<BsHandbag />
				</div>
			</MobileNav>
		</ContainerNavbar>
	)
}

export default Navbar

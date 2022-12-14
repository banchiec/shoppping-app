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
	const [currentUser, setCurrentUser] = useState({})
	const dispatch = useDispatch()

	useEffect(() => {
		setCurrentUser(user)
		console.log(currentUser)
	}, [])

	console.log(currentUser)
	console.log(user)

	const handleLogout = () => {
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

				{/* <Link to={PATHS.PROTECTEDPAGE} >
            <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
          </Link>
          <Link to={PATHS.PROTECTEDPAGE} >
            <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
          </Link> */}
				{user ? (
					<>
						<Link to={PATHS.ADMINPAGE}>Admin</Link>
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
					{!currentUser ? (
						<>
							current
							<Link to={PATHS.LOGINPAGE}>
								<FiLogIn />
							</Link>
							<Link to={PATHS.SIGNUPPAGE}>
								<FiUserPlus />
							</Link>
						</>
					) : (
						<>
							<Link to={PATHS.HOMEPAGE}>
								<FiLogOut onClick={() => handleLogout()} />
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

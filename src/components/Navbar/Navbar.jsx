import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi"
import { BsHandbag } from "react-icons/bs"
import * as PATHS from "../../utils/paths"
import { ContainerNavbar, MobileNav } from "./NavbarStyled"
import { logoutSession } from "../../redux/actions/authActions"
import "./Navbar.css"

const Navbar = () => {
	const { user } = useSelector((state) => state.authLogin)
	const [currentUser, setCurrentUser] = useState(null)
	const dispatch = useDispatch()

	useEffect(() => {
		setCurrentUser(user)
	}, [user])

	const handleLogout = () => {
		dispatch(logoutSession())
	}

	return (
		<ContainerNavbar>
			<Link to={PATHS.HOMEPAGE}></Link>
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

import styled from 'styled-components'

export const ContainerNavbar = styled.nav`
	display: flex;
	margin: 0;justify-content: space-between;
	align-items: center;
  flex-wrap: wrap;
	background: #ffcdd4;
  font-weight: 600;
	a {
		color: black;
		padding: 0px;
	 	text-decoration: none;
	}

	a:hover {
		transform: scale(2.05);
		color:#007220;
	}
	svg {
		font-size: 19px;
		margin: 0 5px;
		:hover {
			transform: rotate(90dg) ;
		}
	}

	@media (max-width: 768px) {
		.nav_screen{
			display: none;
		}
	}
`
export const MobileNav = styled.div`
		svg {
			padding: 0 3px;
			font-size: 19px;
			color: black;
		}

		svg:hover {
			transform: scale(1.05);
			color:#007220;
		}
` 
import styled from 'styled-components'

export  const ContainerSidebar =  styled.div`
	border-bottom: 1px solid whitesmoke;
	display: none;

	@media (min-width: 768px) {
		display: block;
		font-size: .9em;
		font-weight: 400;

		.nav_screen{
			display: none;
		}
		a {
			text-decoration: none;
			color: black;
			:hover {
				cursor: pointer;
			}
		}
		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none ;
			li{
				padding: 0 50px;
				:hover {
					transform: scaleY(1.1);
					color: gray;
				}
			}
		}
	}
`

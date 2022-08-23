import styled from 'styled-components'
export const ContainerFooterAdmin = styled.footer`
	position: fixed;
	bottom: 0;
	background-color: #007220;
	width: 100%;
	div.container-footer {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		border: 1px solid white;
	}
	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		li{
			padding: 0 1em 0 1em;
			list-style: none;
		}
		a{
			color: #ffffff;
			text-decoration: none;
		}
	}
`

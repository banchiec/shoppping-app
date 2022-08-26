import styled from 'styled-components'
export const ContainerFooterAdmin = styled.footer`
	position: fixed;
	padding: 0;
	bottom: 0;
	box-shadow: 0 10px 0 0 #ffffff;
	background: #ffcdd4;
	width: 100%;
	div{
		color: #ffffff;
		margin: 0;
		border: 0;
		a{
			color: #ffffff;
		}
	}
	div.container-footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	ul {
		display: flex;
		flex-direction: row;
		margin: 0;
		justify-content: center;
		align-items: center;
		li{
			margin: 0;
			color: #ffffff;
			padding: 0.5em 1em 0.5em 1em;
			list-style: none;
		}
		a{
			color: #ffffff;
			text-decoration: none;
		}
	}
`

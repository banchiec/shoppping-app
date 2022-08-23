import styled from 'styled-components'
export const ContainerFooterAdmin = styled.footer`
	position: fixed;
	padding: 0;
	bottom: 0;
	background-color: #007220;
	width: 100%;
	div{
		margin: 0;
		border: 0;
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
			padding: 0 1em 0 1em;
			list-style: none;
		}
		a{
			color: #ffffff;
			text-decoration: none;
		}
	}
`

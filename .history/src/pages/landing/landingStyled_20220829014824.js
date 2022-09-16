import styled from 'styled-components'
export const ContainerLanding = styled.nav`
	background: #F8F5FF;
	/* height: 100vh; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	div {
		padding: 15px 0;
		margin:  5px 0;
		p {
			font-size: 1.39em;
			font-weight: 700;
			padding: 0px;
			text-align: center;
			margin: 0px ;
		}
	}
	img{
		/* border: 1px solid green; */
		padding: 0px;
		margin: 0px;
		width:  160px;
	}
	form {
		width: 94%;
		span {
			color: #B06EFF;
		}
		.sub_info {
			margin-top: 10px;
			margin: 0;
			color: black;
			font-size: .82em;
		}
		/* border: 1px solid red; */
	}
`

export const Input = styled.input`
	border: none;
	background: none;
	text-align: center;
	font-size:  1.09em;
	border-bottom: 1px solid gray;
	width:  94%;
	padding: 5px;
	margin: 12px 0;
`
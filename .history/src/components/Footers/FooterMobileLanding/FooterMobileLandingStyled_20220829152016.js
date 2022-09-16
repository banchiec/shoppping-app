import styled from "styled-components";

export const ContainerFooterMobile = styled.div`
	position: fixed;
	width: 100%;
	/* height: 30%; */
	border-top: 1px solid green;
	left: 0;
	background: #F8F5FF;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		border-top: 1px solid green;
		padding: 0;
		margin: 0;
		border: 0;
		width: 140px;
	}
	div {
		border-top: 1px solid green;
		p{
			font-size: 14px;
		}
		a {
			font-size: 14px;
		}
	}
`
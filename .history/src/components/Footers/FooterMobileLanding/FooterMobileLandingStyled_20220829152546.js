import styled from "styled-components";

export const ContainerFooterMobile = styled.div`
	position: fixed;
	width: 100%;
	/* height: 30%; */
	left: 0;
	background: #F8F5FF;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		padding: 0;
		margin: 0;
		width: 140px;
	}
	div {
		color: gray;
		p{
			color: gray;
			font-size: 12px;
		}
		a {
			color: gray;
			font-size: 12px;
			border-bottom: 1px solid black;
		}
	}
`
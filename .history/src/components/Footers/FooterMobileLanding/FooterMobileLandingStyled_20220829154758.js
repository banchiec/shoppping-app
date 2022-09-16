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
		width: 160px;
	}
	div {
		color: gray;
		p{
			font-size: 12px;
			margin: 12px 0;
		}
		a {
			font-size: 12px;
			margin: 12px 0;
			border-bottom: 1px solid black;
		}
		ul {
			margin: 0;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			li {

				padding: 0 10px;
				margin-left: 0;
				list-style: none ;
				text-align: start;
			}
		}
	}
`
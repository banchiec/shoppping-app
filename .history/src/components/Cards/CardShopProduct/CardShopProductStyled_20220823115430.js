import styled from "styled-components"
export const ContainerCardShop = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px ;
	border-bottom: 1px solid gray;
	div{
	}
	.container_description {
		display: flex;
		flex-direction: column;
		margin:  0;
		align-items: start;
		padding: 1em;
		h2 {
			margin:  0;
			padding: 4px 0;
		}
		p {
			text-align: start;
			font-size: em;
			margin:  0;
			color:  gray;
			align-items: start;
		}
		span {
			font-size: 1.1em;
			padding: 10px 0;
		}
	}
	img{
		border-radius: 1em;
		width: 100%;
	}
`
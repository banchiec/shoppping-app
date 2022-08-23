import styled from "styled-components"
export const ContainerCardShop = styled.div`
	display: flex;
	flex-direction: column;
	div{
		border: 1px solid green;
	}
	.container_description {
		display: flex;
		flex-direction: column;
		margin:  0;
		align-items: start;
		padding: 1em;
		p {
			margin:  0;
			border: 1px solid green;
			align-items: start;
		}
	}
	img{
		border-radius: 1em;
		width: 100%;
	}
`
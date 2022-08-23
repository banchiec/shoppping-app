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
		h2 {
			margin:  0;
			padding: 4px 0;
		}
		p {
			text-align: start;
			margin:  0;
			align-items: start;
		}
	}
	img{
		border-radius: 1em;
		width: 100%;
	}
`
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
		align-items: start;
	}
	img{
		border-radius: 1em;
		width: 100%;
	}
	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`
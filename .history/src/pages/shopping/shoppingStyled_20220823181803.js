import styled from 'styled-components'

export const ContainerShopping = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	padding: 10px 20px;
	@media (min-width: 768px) {
		width: 80%;
		margin: 2% 10%;
		flex-direction: row;
		flex-wrap: wrap;
	}
`
import styled from 'styled-components'

export const ContainerShopping = styled.div`
	display: flex;
	with: 80%;
	flex-wrap: nowrap;
	flex-direction: column;
	padding: 10px 20px;
	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`
import styled from 'styled-components'

export const ContainerShopping = styled.div`
	display: flex;
	width: 80%;
	margin: 0 10%;
	flex-wrap: nowrap;
	flex-direction: column;
	padding: 10px 20px;
	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`
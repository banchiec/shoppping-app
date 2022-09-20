import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	border: 1px solid green;
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h2 {
			font-size: 2.1em;
			padding: 0;
			margin-top: 1em;
		}
	}
`

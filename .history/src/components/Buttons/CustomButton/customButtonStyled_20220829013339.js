import styled from "styled-components";

export const Button = styled.button`
	border: none;
	padding: 15px 0;
	font-weight: 600;
	border-radius: 35px;
	background: ${props => props.buttonColor || '#693BF3'};
	color: whitesmoke;
	margin: 12px 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: .92em;
	svg{
		font-size: 1.7em ;
	}
`
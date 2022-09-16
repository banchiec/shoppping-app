import styled from "styled-components";

export const Button = styled.button`
	border: none;
	padding: 15px 0;
	font-weight: 600;
	border-radius: 35px;
	background: ${props => props.buttonColor || 'white'};
	color:  ${props => props.textColor || 'transparent'};
	margin-top: 15px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: .92em;
	svg{
		font-size: 1.32em ;
		padding: 0 9px;
	}
`
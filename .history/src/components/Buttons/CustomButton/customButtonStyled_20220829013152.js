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
	font-size: .92em;
	a{
		border: 1px solid green;
		svg{}
		border: 1px solid green;
	}
`
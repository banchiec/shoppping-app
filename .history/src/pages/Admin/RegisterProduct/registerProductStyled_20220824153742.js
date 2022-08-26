import styled from "styled-components";

export const ContainerRegister = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid green;
`
export const ContainerForm = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`
export const ContainerRegisterGalery = styled.div`
	@media (min-width: 768px) {
	display:  flex;
	flex-direction: column;
	width: 70%;
	border: 1px solid green;
	border-radius: 5px;
	padding: 5px;
	img{
		border-radius: 5px;
		width: 100%;
	}
	}
`
export const ContainerMiniGalery = styled.div`
	display:  flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border: 1px solid green;
	img {
		width: 20%;
		padding: 10px;
		border-radius: 10px;
	}
`
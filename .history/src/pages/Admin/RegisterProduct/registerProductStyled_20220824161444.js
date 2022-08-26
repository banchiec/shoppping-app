import styled from "styled-components";

export const ContainerRegister = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid green;
	}
`
export const ContainerForm = styled.div`
	border: 1px solid green;
	@media (min-width: 768px) {
		display: flex;
		width: 80%;
		flex-direction: row;
		justify-content: center;
		/* align-items: center; */
		padding: 2em;
		margin: 2em 0;
	}
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
	@media (min-width: 768px) {
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
	}
`
export const FormControl = styled.div`
	@media (min-width: 768px) {
		width: 80%;
		margin-top:  2rem;
		border: 1px solid green;
	}
`
export const Input = styled.input`
	@media ( min-width: 768px){
		padding: 10px;
		border: 1px solid green;
		width: 80%;
	}
`

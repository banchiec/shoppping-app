import styled from "styled-components";

export const ContainerRegister = styled.div`
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
export const ContainerForm = styled.div`
	@media (min-width: 768px) {
		display: flex;
		border: 1px solid green;
		width: 80%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0 2em ;
		margin: 2em 0;
	}
`
export const ContainerRegisterForm = styled.form`
	@media (min-width: 768px) {
		display: flex;
		/* border: 1px solid green; */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`
export const ContainerRegisterGalery = styled.div`
	@media (min-width: 768px) {
		display:  flex;
		flex-direction: column;
		width: 30%;
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
		padding: 2em 0;
		border-radius: 5px;
		border: 1px solid green;
	}
`
export const Input = styled.input`
	@media ( min-width: 768px){
		padding: 10px;
		margin:  1.5em 0;
		border: 1px solid gray;
		border-radius: 5px;
		width: 80%;
	}
`
export const ButtonRegister = styled.button`
	padding: 10px;
	margin: 0;
	width: 80% ;
`
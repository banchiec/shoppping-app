import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	@media (min-width: 768px) {
		border: 1px solid green;
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
export const ContainerRegister = styled.div`
	@media (min-width: 768px) {
		border: 1px solid green;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		width: 80%;
		padding: 3.6em;
		margin: 2em 0;
	}
`
export const ContainerForm = styled.form`
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		border: 1px solid green;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`
export const ContainerRegisterGalery = styled.div`
	@media (min-width: 768px) {
		border: 1px solid green;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 2fr);
		/* flex-direction: column; */
		width: 350px;
		/* height: 700px; */
		border-radius: 5px;
		padding: 45px;
		img {
			border-radius: 5px;
			width: 100%;
		}
	}
`
export const ContainerMiniGalery = styled.div`
	@media (min-width: 768px) {
		display: flex;
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;

	@media (min-width: 768px) {
		width: 80%;
		padding: 2em 0;
		border-radius: 5px;
	}
`
export const Input = styled.input`
	width: 80%;
	padding: 10px;
	margin: 5px 0;
	@media (min-width: 768px) {
		padding: 10px;
		margin: 1.5em 0;
		border: 1px solid gray;
		border-radius: 5px;
		width: 80%;
	}
`
export const ButtonRegister = styled.button`
	padding: 10px;
	margin: 15px 0;
	width: 83%;
	border: none;
	font-size: 1em;
	font-weight: 500;
	border-radius: 5px;
	background: #ffcdd4;

	:hover {
		cursor: pointer;
	}
`

import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: -400px;
	width:  400px;
	height: 100%; 
	z-index: 111;
	transition: all 0.25s;
	border: 1px solid green;
	.enter {
		opacity: 1;
		left: 0;
	}

`
export const SidebarMenu = styled.div`
 	overflow-x: scroll;
  overflow-y: hidden;
  height: 80px;
  white-space:nowrap;
`

export const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
`
export const ListItem = styled.li`
	padding: 0px 10px;
`

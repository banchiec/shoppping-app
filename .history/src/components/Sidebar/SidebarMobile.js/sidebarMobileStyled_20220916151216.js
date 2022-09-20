import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width:  auto;
	height: 99.4vh;
	border: 1px solid green;
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
	padding: 0px 20px;
`
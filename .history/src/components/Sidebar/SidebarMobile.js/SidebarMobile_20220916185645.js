import { Container, List, ListItem, SidebarMenu } from "./sidebarMobileStyled"
import { AiOutlineClose } from  'react-icons/ai'

const SidebarMobile = ( {showSidebar, handleCloseSidebar}) => {
	console.log(showSide);

	return(
		<Container className={`${showSidebar? 'enter': ' '}`}>
			<SidebarMenu>
				<List>
					<ListItem>Mujer</ListItem>
					<ListItem>Mujer</ListItem>
					<ListItem>Mujer</ListItem>
					<ListItem>Mujer</ListItem>
					<ListItem>
						<AiOutlineClose onClick={() => handleCloseSidebar()}/>
					</ListItem>
				</List>
			</SidebarMenu>
		</Container>
	)
}
export default SidebarMobile 
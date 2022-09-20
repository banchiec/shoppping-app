import { Container, List, ListItem, SidebarMenu } from "./sidebarMobileStyled"
import { AiOutlineClose } from  'react-icons/ai'

const SidebarMobile = ( {handleCloseSidebar}) => {

	return(
		<Container >
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
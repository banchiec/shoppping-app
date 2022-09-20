/*eslint-disable*/
import React from 'react'
import { Link, Routes } from 'react-router-dom'
import * as PATHS from '../../utils/paths'

import { ContainerSidebar } from './sidebarStyled'

export default function Sidebar() {
	const [collapseShow, setCollapseShow] = React.useState('hidden')
	return (
		<ContainerSidebar>
			<ul>
				<Link to={PATHS.REGISTERPRODUCT}>
					<li>Registrar producto</li>
				</Link>
				<Link to={PATHS.REGISTERCATEGORY}>
					<li>Registrar Categoria</li>
				</Link>
				<li>Registrar producto</li>
				<li>Registrar producto</li>
			</ul>
		</ContainerSidebar>
	)
}

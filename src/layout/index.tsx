import NavbarNavigator from './Navbar/index.tsx.js'
import { Container } from '@mui/material'

function MainLayout(props: any) {
	const { components } = props
	return (
		<>
			<NavbarNavigator />
			<Container>
				{components}
			</Container>
		</>
	)
}

export default MainLayout
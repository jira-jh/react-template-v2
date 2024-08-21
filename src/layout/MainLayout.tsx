import Header from './Header/Header'
import { Container } from '@mui/material'

function MainLayout(props: any) {
	const { components } = props
	return (
		<>
			<Header />
			<Container>
				{components}
			</Container>
		</>
	)
}

export default MainLayout
import React from 'react'
import Header from './Header/Header'
import Container from 'react-bootstrap/Container';

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
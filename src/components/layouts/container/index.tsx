import { ReactNode } from 'react'
import { Container } from '@mui/material'

function PageContainer({ children }: { children: ReactNode }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default PageContainer
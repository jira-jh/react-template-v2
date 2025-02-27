import './index.scss'
import { Button, Stack, Typography } from '@mui/material'
import { useNavigate } from '../../hooks/navigate/useNavigate'
function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className='not-found-page'>
      <Stack spacing={2} justifyContent='center' alignItems='center' sx={{ height: '100vh' }}>
        <Typography variant='h1'>404</Typography>
        <Typography variant='h4'>Page Not Found</Typography>
        <Button onClick={() => navigate(-1)} variant='contained'>Back to Home</Button>
      </Stack>
    </div>
  )
}

export default NotFoundPage
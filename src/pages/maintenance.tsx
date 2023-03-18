// next
import NextLink from 'next/link'
// @mui
import { styled } from '@mui/material/styles'
import { Button, Typography, Container } from '@mui/material'
// components
import Page from '@Components/Page'
//
import { MaintenanceIllustration } from '../assets'

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}))

export default function Maintenance() {
  return (
    <Page title="Maintenance" sx={{ height: 1 }}>
      <RootStyle>
        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            Site atualmente em manutenção
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            No momento, estamos trabalhando duro nesta página!
          </Typography>

          <MaintenanceIllustration sx={{ my: 10, height: 240 }} />

          <NextLink href="/">
            <Button size="large" variant="contained">
              Voltar para home
            </Button>
          </NextLink>
        </Container>
      </RootStyle>
    </Page>
  )
}

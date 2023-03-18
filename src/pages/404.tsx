import NextLink from 'next/link'
import { Box, Button, Typography, Container } from '@mui/material'
import { MotionContainer, varBounce } from '@Components/animate'
import { PageNotFoundIllustration } from '../assets'
import { styled } from '@mui/material/styles'
import { m } from 'framer-motion'
import Page from '@Components/Page'
import Layout from '../layouts'

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}))

Page404.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="logoOnly">{page}</Layout>
}

export default function Page404() {
  return (
    <Page title="404 Page Not Found" sx={{ height: 1 }}>
      <RootStyle>
        <Container component={MotionContainer}>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h3" paragraph>
                Sorry, page not found!
              </Typography>
            </m.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Desculpe, não encontramos a página que você está procurando.
              Talvez você tenha digitado errado o URL? Certifique-se de
              verificar a ortografia.
            </Typography>
            <m.div variants={varBounce().in}>
              <PageNotFoundIllustration
                sx={{ height: 260, my: { xs: 5, sm: 10 } }}
              />
            </m.div>
            <NextLink href="/">
              <Button size="large" variant="contained">
                Voltar para home
              </Button>
            </NextLink>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  )
}

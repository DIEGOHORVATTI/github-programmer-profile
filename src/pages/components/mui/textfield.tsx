import { useState } from 'react'
// @mui
import { styled } from '@mui/material/styles'
import { Box, Container, Tab } from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab'
// routes
import { PATH_PAGE } from '@Routes/paths'
// layouts
import Layout from '@Layouts/index'
// components
import Page from '@Components/Page'
import HeaderBreadcrumbs from '@Components/HeaderBreadcrumbs'
// sections
import Filled from '../../../sections/overview/mui/textfield/Filled'
import Standard from '../../../sections/overview/mui/textfield/Standard'
import Outlined from '../../../sections/overview/mui/textfield/Outlined'

const TEXTFIELDS = [
  { name: 'Filled', component: <Filled /> },
  { name: 'Standard', component: <Standard /> },
  { name: 'Outlined', component: <Outlined /> }
]

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}))

MUITextField.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>
}

export default function MUITextField() {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Page title="Components: TextField">
      <RootStyle>
        <Box
          sx={{
            pt: 6,
            pb: 1,
            mb: 10,
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'
          }}
        >
          <Container>
            <HeaderBreadcrumbs
              heading="TextField"
              links={[
                { name: 'Components', href: PATH_PAGE.components },
                { name: 'TextField' }
              ]}
              moreLink="https://mui.com/components/text-fields"
            />
          </Container>
        </Box>

        <Container>
          <form noValidate autoComplete="off">
            <TabContext value={value}>
              <TabList onChange={handleChange}>
                {TEXTFIELDS.map((tab, index) => (
                  <Tab
                    disableRipple
                    key={tab.name}
                    label={tab.name}
                    value={String(index + 1)}
                  />
                ))}
              </TabList>

              {TEXTFIELDS.map((tab, index) => (
                <TabPanel
                  key={tab.name}
                  value={String(index + 1)}
                  sx={{ mt: 5 }}
                >
                  {tab.component}
                </TabPanel>
              ))}
            </TabContext>
          </form>
        </Container>
      </RootStyle>
    </Page>
  )
}
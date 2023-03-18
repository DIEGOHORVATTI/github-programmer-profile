import { Container, Card, Tab, Box } from '@mui/material'
import Layout from '@Layouts/index'
import Page from '@Components/Page'
import { styled } from '@mui/material/styles'
import SortingSelecting from './sortingSelecting'
import MUITable from '../../components/mui/table'
import { Block } from '../../../sections/overview/Block'
import Iconify from '@Components/Iconify'
import { useState } from 'react'
import { Masonry, TabContext, TabList, TabPanel } from '@mui/lab'

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { mx: '8px !important' }
} as const

const SIMPLE_TAB = [
  {
    value: '1',
    icon: <Iconify icon="eva:phone-call-fill" width={24} height={24} />,
    label: 'item ono',
    disabled: false
  },
  {
    value: '2',
    icon: <Iconify icon="eva:heart-fill" width={24} height={24} />,
    label: 'Item Two',
    disabled: false
  },
  {
    value: '3',
    icon: <Iconify icon="eva:headphones-fill" width={24} height={24} />,
    label: 'Item Three',
    disabled: false
  }
]

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}))

MUITable.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>
}
GeneralBanking.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default function GeneralBanking() {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Page title="General: Banking">
      <RootStyle>
        <Container>
          <Masonry columns={{ xs: 1 }} spacing={1}>
            <Block title="Veículos de Clientes" sx={style}>
              <TabContext value={value}>
                <TabList onChange={handleChange}>
                  {SIMPLE_TAB.map((tab, index) => (
                    <Tab
                      key={tab.value}
                      icon={tab.icon}
                      label={tab.label}
                      value={String(index + 1)}
                      disabled={tab.disabled}
                    />
                  ))}
                </TabList>
                <Box
                  sx={{
                    p: 2,
                    mt: 2,
                    height: 80,
                    width: '100%',
                    borderRadius: 1,
                    bgcolor: 'grey.50012'
                  }}
                >
                  {SIMPLE_TAB.map((panel, index) => (
                    <TabPanel key={panel.value} value={String(index + 1)}>
                      {/* <Card>{panel.label}</Card> */}
                      <Card>
                        <SortingSelecting />
                      </Card>
                    </TabPanel>
                  ))}
                </Box>
              </TabContext>
            </Block>
          </Masonry>
        </Container>
      </RootStyle>
    </Page>
  )
}

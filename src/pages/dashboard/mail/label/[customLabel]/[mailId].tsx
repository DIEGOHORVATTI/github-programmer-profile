import { useEffect, useState } from 'react'
// next
import { useRouter } from 'next/router'
// @mui
import { Container, Card } from '@mui/material'
// redux
import { useDispatch } from '../../../../../redux/store'
import { getLabels } from '../../../../../redux/slices/mail'
// routes
import { PATH_DASHBOARD } from '@Routes/paths'
// hooks
import useSettings from '@Hooks/useSettings'
// layouts
import Layout from '@Layouts/index'
// components
import Page from '@Components/Page'
import HeaderBreadcrumbs from '@Components/HeaderBreadcrumbs'
// sections
import {
  MailList,
  MailDetails,
  MailSidebar,
  MailCompose
} from '../../../../../sections/@dashboard/mail'

Mail.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default function Mail() {
  const { themeStretch } = useSettings()

  const dispatch = useDispatch()

  const { query } = useRouter()
  const { mailId } = query

  const [openSidebar, setOpenSidebar] = useState(false)

  const [openCompose, setOpenCompose] = useState(false)

  useEffect(() => {
    dispatch(getLabels())
  }, [dispatch])

  return (
    <Page title="Mail">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Mail"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root
            },
            { name: 'Mail' }
          ]}
        />
        <Card
          sx={{
            minHeight: 480,
            height: { md: '72vh' },
            display: { md: 'flex' }
          }}
        >
          <MailSidebar
            isOpenSidebar={openSidebar}
            onCloseSidebar={() => setOpenSidebar(false)}
            onOpenCompose={() => setOpenCompose(true)}
          />
          {mailId ? (
            <MailDetails />
          ) : (
            <MailList onOpenSidebar={() => setOpenSidebar(true)} />
          )}
          <MailCompose
            isOpenCompose={openCompose}
            onCloseCompose={() => setOpenCompose(false)}
          />
        </Card>
      </Container>
    </Page>
  )
}

import { useEffect } from 'react'
// @mui
import { Card, Container } from '@mui/material'
// redux
import { useDispatch } from '../../../redux/store'
import { getConversations, getContacts } from '../../../redux/slices/chat'
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
import { ChatSidebar, ChatWindow } from '../../../sections/@dashboard/chat'

Chat.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default function Chat() {
  const { themeStretch } = useSettings()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConversations())
    dispatch(getContacts())
  }, [dispatch])

  return (
    <Page title="Chat">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Chat"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Chat' }
          ]}
        />
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <ChatSidebar />
          <ChatWindow />
        </Card>
      </Container>
    </Page>
  )
}

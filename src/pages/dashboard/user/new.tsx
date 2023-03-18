// @mui
import { Container } from '@mui/material'
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
import UserNewForm from '../../../sections/@dashboard/user/UserNewForm'

UserCreate.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default function UserCreate() {
  const { themeStretch } = useSettings()

  return (
    <Page title="User: Create a new user">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new user"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.list },
            { name: 'New user' }
          ]}
        />
        <UserNewForm />
      </Container>
    </Page>
  )
}

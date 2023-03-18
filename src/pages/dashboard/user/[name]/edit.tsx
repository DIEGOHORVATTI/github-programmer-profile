import { paramCase, capitalCase } from 'change-case'
// next
import { useRouter } from 'next/router'
// @mui
import { Container } from '@mui/material'
// routes
import { PATH_DASHBOARD } from '@Routes/paths'
// hooks
import useSettings from '@Hooks/useSettings'
// _mock_
import { _userList } from '../../../../_mock'
// layouts
import Layout from '@Layouts/index'
// components
import Page from '@Components/Page'
import HeaderBreadcrumbs from '@Components/HeaderBreadcrumbs'
// sections
import UserNewForm from '../../../../sections/@dashboard/user/UserNewForm'

UserEdit.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default function UserEdit() {
  const { themeStretch } = useSettings()

  const { query } = useRouter()

  const { name } = query

  const currentUser = _userList.find((user) => paramCase(user.name) === name)

  return (
    <Page title="User: Edit user">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Edit user"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.list },
            { name: capitalCase(name as string) }
          ]}
        />

        <UserNewForm isEdit currentUser={currentUser} />
      </Container>
    </Page>
  )
}

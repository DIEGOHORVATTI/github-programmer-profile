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
import { BlogNewPostForm } from '../../../sections/@dashboard/blog'

BlogNewPost.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default function BlogNewPost() {
  const { themeStretch } = useSettings()

  return (
    <Page title="Blog: New Post">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new post"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Blog', href: PATH_DASHBOARD.blog.root },
            { name: 'New Post' }
          ]}
        />

        <BlogNewPostForm />
      </Container>
    </Page>
  )
}

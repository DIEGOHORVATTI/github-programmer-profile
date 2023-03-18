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
import ProductNewForm from '../../../../sections/@dashboard/e-commerce/ProductNewForm'

EcommerceProductCreate.getLayout = function getLayout(
  page: React.ReactElement
) {
  return <Layout>{page}</Layout>
}

export default function EcommerceProductCreate() {
  const { themeStretch } = useSettings()

  return (
    <Page title="Ecommerce: Create a new product">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new product"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'E-Commerce',
              href: PATH_DASHBOARD.eCommerce.root
            },
            { name: 'New product' }
          ]}
        />
        <ProductNewForm />
      </Container>
    </Page>
  )
}

import { useEffect } from 'react'
import { paramCase } from 'change-case'
// next
import { useRouter } from 'next/router'
// @mui
import { Container } from '@mui/material'
// redux
import { useDispatch, useSelector } from '../../../../../redux/store'
import { getProducts } from '../../../../../redux/slices/product'
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
import ProductNewForm from '../../../../../sections/@dashboard/e-commerce/ProductNewForm'

EcommerceProductEdit.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default function EcommerceProductEdit() {
  const { themeStretch } = useSettings()

  const dispatch = useDispatch()

  const { query } = useRouter()

  const { name } = query

  const { products } = useSelector((state) => state.product)

  const currentProduct = products.find(
    (product) => paramCase(product.name) === name
  )

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Page title="Ecommerce: Edit product">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Edit product"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'E-Commerce',
              href: PATH_DASHBOARD.eCommerce.root
            },
            { name: name as string }
          ]}
        />

        <ProductNewForm isEdit currentProduct={currentProduct} />
      </Container>
    </Page>
  )
}

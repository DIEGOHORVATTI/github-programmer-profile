import { paramCase } from 'change-case'
// next
import NextLink from 'next/link'
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material'
// routes
import { PATH_DASHBOARD } from '@Routes/paths'
// utils
import { fCurrency } from '@Utils/formatNumber'
// @types
import { Product } from '../../../../@types/product'
// components
import Label from '@Components/Label'
import Image from '@Components/Image'
import { ColorPreview } from '@Components/color-utils'

type Props = {
  product: Product
}

export default function ShopProductCard({ product }: Props) {
  const { name, cover, price, colors, status, priceSale } = product

  const linkTo = `${PATH_DASHBOARD.eCommerce.root}/product/${paramCase(name)}`

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              position: 'absolute',
              textTransform: 'uppercase'
            }}
          >
            {status}
          </Label>
        )}
        <Image alt={name} src={cover} ratio="1/1" />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <NextLink href={linkTo} passHref>
          <Link color="inherit">
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Link>
        </NextLink>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <ColorPreview colors={colors} />

          <Stack direction="row" spacing={0.5}>
            {priceSale && (
              <Typography
                component="span"
                sx={{ color: 'text.disabled', textDecoration: 'line-through' }}
              >
                {fCurrency(priceSale)}
              </Typography>
            )}

            <Typography variant="subtitle1">{fCurrency(price)}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

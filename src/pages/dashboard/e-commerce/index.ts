import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PATH_DASHBOARD } from '@Routes/paths'

export default function Index() {
  const { pathname, push } = useRouter()

  useEffect(() => {
    if (pathname === PATH_DASHBOARD.eCommerce.root) {
      push(PATH_DASHBOARD.eCommerce.shop)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return null
}

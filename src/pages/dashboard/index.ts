import { useEffect } from 'react'
// next
import { useRouter } from 'next/router'
// config
import { PATH_AFTER_LOGIN } from '../../config'
// routes
import { PATH_DASHBOARD } from '../../routes/paths'

export default function Index() {
  const { pathname, replace, prefetch } = useRouter()

  useEffect(() => {
    if (pathname === PATH_DASHBOARD.root) {
      replace(PATH_AFTER_LOGIN)
    }
  }, [pathname, replace])

  useEffect(() => {
    prefetch(PATH_AFTER_LOGIN)
  }, [prefetch])

  return null
}

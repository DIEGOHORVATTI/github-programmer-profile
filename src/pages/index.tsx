import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PATH_DASHBOARD } from 'src/routes/paths'

export default function HomePage() {
  const { push } = useRouter()

  useEffect(() => {
    push(PATH_DASHBOARD.root)
  }, [push])

  return <></>
}

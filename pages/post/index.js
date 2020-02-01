import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { setLocale } from 'translations'
import useStore from 'store'

const Post = ({ locale }) => {
  setLocale(locale)
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post

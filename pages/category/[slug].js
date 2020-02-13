import { useRouter } from 'next/router'

import { setLocale } from 'translations'
import useStore from 'store'
import { errorDispatcher, localeDispatcher } from 'store/helpers'

const Category = ({ locale }) => {
  setLocale(locale)
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

Category.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default Category

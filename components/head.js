import { DefaultSeo } from 'next-seo'
import config from '@/seo.json'

export default function Head () {
  return (
    <>
      <DefaultSeo {...config} />
    </>
  )
}

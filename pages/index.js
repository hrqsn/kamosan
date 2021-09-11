import { NextSeo } from 'next-seo'
import { Hero, About, Works, Others } from '@/components'
import { Navigation, Footer } from '@/layouts'

import { getAllPostsForHome } from '@/lib/api'

export default function Home ({
  allPosts
}) {
  return (
    <>
      <NextSeo title='トップ' />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Works works={allPosts} />
        <Others />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const allPosts = (await getAllPostsForHome()) || []
  return {
    props: { allPosts }
  }
}

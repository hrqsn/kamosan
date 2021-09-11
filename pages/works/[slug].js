import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { NextSeo } from 'next-seo'
import { Navigation, Footer, Wrapper } from '@/layouts'
import { PostHeader, PostBody } from '@/components'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api'
import markdownToHtml from '@/lib/markdown-to-html'

export default function Post ({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <NextSeo title={post.title} />
      <Navigation />
      <main>
        <Wrapper>
          {router.isFallback ? (
            <span>Loading…</span>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  image={post.image}
                />
                <PostBody content={post.body} />
              </article>
            </>
          )}
        </Wrapper>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps ({ params }) {
  const data = await getPostAndMorePosts(params.slug)
  const content = await markdownToHtml(data?.posts[0]?.content || '')

  return {
    props: {
      post: {
        ...data?.posts[0],
        content
      }
    }
  }
}

export async function getStaticPaths () {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((work) => `/works/${work.slug}`) || [],
    fallback: true
  }
}

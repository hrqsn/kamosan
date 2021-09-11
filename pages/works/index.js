import { NextSeo } from 'next-seo'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components'
import { Navigation, Footer, Wrapper } from '@/layouts'
import { imageUrl } from '@/lib/url'
import { getAllPosts, getAllTags } from '@/lib/api'
import Masonry from 'react-masonry-css'

export default function Works ({
  allPosts,
  allTags
}) {
  const works = allPosts
  const [selectedTags, setSelectedTags] = useState({
    id: 0,
    name: 'すべて'
  })
  const [previousTag, setPreviousTag] = useState(null)
  const breakpointColumns = {
    default: 3,
    1024: 3,
    768: 2
  }

  function selected (e, i, name) {
    if (process.browser) {
      document.querySelector('.works__tag.active').classList.remove('active')
    }

    setSelectedTags({
      id: i,
      name: name
    })
    e.target.classList.add('active')
  }

  const filteredWorks = useMemo(() => {
    const matchWorks = []

    if (selectedTags.id === 0) {
      return allPosts
    }

    allPosts.map(row => {
      row.tags.map(tag => {
        if (tag.name === selectedTags.name) {
          const isActiveWork = matchWorks.some(w => {
            if (w.id === row.id) return true
          })
          if (!isActiveWork) matchWorks.push(row)
        }
      })
    })

    return matchWorks
  }, [works, selectedTags, previousTag])

  return (
    <>
      <NextSeo title='作品' />
      <Navigation />
      <main>
        <Header subtitle='Works' title='作品' />
        <div className='work__container'>
          <Wrapper>
            <div className='works__tags'>
              <button onClick={e => selected(e, 0, 'すべて')} className='works__tag active'>すべて</button>
              {allTags.map((tag, i) => (
                <button key={i} onClick={e => selected(e, i + 1, tag.name)} className='works__tag'>{tag.name}</button>
              ))}
            </div>
            {filteredWorks.length === 0 ? (
              <p className='works__placeholder'>作品が見つかりませんでした。</p>
            ) : (
              <Masonry
                breakpointCols={breakpointColumns}
                className='works'
              >
                {filteredWorks.map((work, i) => (
                  <div className='work' key={i}>
                    <Link href={`/works/${work.slug}`} scroll={false}>
                      <a className='hover-image work__image'>
                        <img src={`${imageUrl(work.image.url)}`} alt={work.title} />
                      </a>
                    </Link>
                  </div>
                ))}
              </Masonry>
            )}
          </Wrapper>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const allPosts = (await getAllPosts()) || []
  const allTags = (await getAllTags()) || []
  return {
    props: { allPosts, allTags }
  }
}

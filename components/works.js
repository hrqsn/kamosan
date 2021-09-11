import Link from 'next/link'
import { Wrapper } from '@/layouts'
import Masonry from 'react-masonry-css'
import { imageUrl } from '@/lib/url'

export default function Works ({
  works
}) {
  const breakpointColumns = {
    default: 3,
    1024: 3,
    768: 2
  }

  return (
    <>
      <section className='works__container'>
        <Wrapper>
          <h1 className='works__title'>Works</h1>
          <p className='works__subtitle'>今までつくったテクスチャやスキンたち</p>
          <Masonry
            breakpointCols={breakpointColumns}
            className='works'
          >
            {works.map((work, i) => (
              <div className='work' key={i}>
                <Link href={`/works/${work.slug}`} scroll={false}>
                  <a className='hover-image work__image'>
                    <img src={`${imageUrl(work.image.url)}`} alt={work.title} />
                  </a>
                </Link>
              </div>
            ))}
          </Masonry>
          <div className='works__nav'>
            <Link href='/works' scroll={false}>
              <a className='button'>もっと見る →</a>
            </Link>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

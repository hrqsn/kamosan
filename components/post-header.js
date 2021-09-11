import Link from 'next/link'
import { imageUrl } from '@/lib/url'

export default function PostHeader ({ title, image }) {
  return (
    <div className='post-header'>
      <Link href='/works' scroll={false}>
        <a className='post-header__back'>← Works</a>
      </Link>
      <div className='post-header__cover'>
        <img src={`${imageUrl(image.url)}`} alt={title} />
      </div>
      <h1 className='post-header__title'>{title}</h1>
    </div>
  )
}

import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

import Wrapper from './wrapper'

export default function Header () {
  const router = useRouter()

  const activeNavItem = (pathname) => {
    return router.pathname === pathname ? 'active' : null
  }

  return (
    <>
      <header className='navigation__container'>
        <Wrapper>
          <div className='navigation__inner'>
            <div className='navigation__root'>
              <Link href='/' scroll={false}>
                <a>
                  <img src='/img/logo.jpeg' alt='kamosan' />
                </a>
              </Link>
            </div>
            <nav className='navigation__links'>
              <Link href='/' scroll={false}>
                <a className={cn('navigation__link', activeNavItem('/'))}>Top</a>
              </Link>
              <Link href='/works' scroll={false}>
                <a className={cn('navigation__link', activeNavItem('/works'))}>Works</a>
              </Link>
              <Link href='/contact' scroll={false}>
                <a className={cn('navigation__link', activeNavItem('/contact'))}>Contact</a>
              </Link>
            </nav>
          </div>
        </Wrapper>
      </header>
    </>
  )
}

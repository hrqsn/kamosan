import { NextSeo } from 'next-seo'
import { Header } from '@/components'
import { Navigation, Footer, Wrapper } from '@/layouts'

export default function Contact () {
  return (
    <>
      <NextSeo title='お問い合わせ' />
      <Navigation />
      <main>
        <Header subtitle='Contact' title='お問い合わせ' />
        <div className='contact__container'>
          <Wrapper>
            <p className='contact__content'>お問い合わせは <a href='https://twitter.com/kamo_xxxx' target='_blank' rel='noopener noreferrer'>Twitterアカウント</a> のDMまでお願いいたします。</p>
          </Wrapper>
        </div>
      </main>
      <Footer />
    </>
  )
}

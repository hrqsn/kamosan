import Wrapper from './wrapper'

export default function Footer () {
  return (
    <>
      <footer className='footer__container'>
        <Wrapper>
          <div className='footer__inner'>
            <span className='footer__copyright'>©︎ {new Date().getFullYear()} Kamo Mitudori.</span>
          </div>
        </Wrapper>
      </footer>
    </>
  )
}

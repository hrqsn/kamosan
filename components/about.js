import { Wrapper } from '@/layouts'

export default function About () {
  return (
    <>
      <section className='about__container'>
        <Wrapper width='md'>
          <h1 className='about__title'>About</h1>
          <div className='sm-only'>
            <div className='about__profile'>
              <img
                src='/img/profile.jpeg'
                alt='kamosan'
                className='about__profile--l'
              />
              <div className='about__profile--r'>
                <h2>三ツ鳥かも（3）</h2>
                <div className='about__profile--social'>
                  <a href='https://twitter.com/ucr_0001' target='_blank' rel='noopener noreferrer'>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M16 3C15.4 3.3 14.8 3.4 14.1 3.5C14.8 3.1 15.3 2.5 15.5 1.7C14.9 2.1 14.2 2.3 13.4 2.5C12.8 1.9 11.9 1.5 11 1.5C9.3 1.5 7.8 3 7.8 4.8C7.8 5.1 7.8 5.3 7.9 5.5C5.2 5.4 2.7 4.1 1.1 2.1C0.8 2.6 0.7 3.1 0.7 3.8C0.7 4.9 1.3 5.9 2.2 6.5C1.7 6.5 1.2 6.3 0.7 6.1C0.7 7.7 1.8 9 3.3 9.3C3 9.4 2.7 9.4 2.4 9.4C2.2 9.4 2 9.4 1.8 9.3C2.2 10.6 3.4 11.6 4.9 11.6C3.8 12.5 2.4 13 0.8 13C0.5 13 0.3 13 0 13C1.5 13.9 3.2 14.5 5 14.5C11 14.5 14.3 9.5 14.3 5.2C14.3 5.1 14.3 4.9 14.3 4.8C15 4.3 15.6 3.7 16 3Z' fill='#00ACEE' />
                    </svg>
                  </a>
                  <a href='https://www.youtube.com/channel/UCFjt4YyamB1Rrx96X-3fvmw' target='_blank' rel='noopener noreferrer'>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15.8 4.8C15.6 3.5 15 2.6 13.6 2.4C11.4 2 8 2 8 2C8 2 4.6 2 2.4 2.4C1 2.6 0.3 3.5 0.2 4.8C0 6.1 0 8 0 8C0 8 0 9.9 0.2 11.2C0.4 12.5 1 13.4 2.4 13.6C4.6 14 8 14 8 14C8 14 11.4 14 13.6 13.6C15 13.3 15.6 12.5 15.8 11.2C16 9.9 16 8 16 8C16 8 16 6.1 15.8 4.8ZM6 11V5L11 8L6 11Z' fill='#FF0000' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <p className='about__bio'>個人勢の幼女系VTuber。<br className='sm-only' />やりたいことをとことんやる！<br />Minecraftのスキン、テクスチャ作りが得意。<br />UCRと今鯖の運営側。</p>
          </div>
          <div className='desktop-only'>
            <div className='about__profile'>
              <img
                src='/img/profile.jpeg'
                alt='kamosan'
                className='about__profile--l'
              />
              <div className='about__profile--r'>
                <h2>三ツ鳥かも（3）</h2>
                <div className='about__profile--social'>
                  <a href='https://twitter.com/ucr_0001' target='_blank' rel='noopener noreferrer'>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M16 3C15.4 3.3 14.8 3.4 14.1 3.5C14.8 3.1 15.3 2.5 15.5 1.7C14.9 2.1 14.2 2.3 13.4 2.5C12.8 1.9 11.9 1.5 11 1.5C9.3 1.5 7.8 3 7.8 4.8C7.8 5.1 7.8 5.3 7.9 5.5C5.2 5.4 2.7 4.1 1.1 2.1C0.8 2.6 0.7 3.1 0.7 3.8C0.7 4.9 1.3 5.9 2.2 6.5C1.7 6.5 1.2 6.3 0.7 6.1C0.7 7.7 1.8 9 3.3 9.3C3 9.4 2.7 9.4 2.4 9.4C2.2 9.4 2 9.4 1.8 9.3C2.2 10.6 3.4 11.6 4.9 11.6C3.8 12.5 2.4 13 0.8 13C0.5 13 0.3 13 0 13C1.5 13.9 3.2 14.5 5 14.5C11 14.5 14.3 9.5 14.3 5.2C14.3 5.1 14.3 4.9 14.3 4.8C15 4.3 15.6 3.7 16 3Z' fill='#00ACEE' />
                    </svg>
                  </a>
                  <a href='https://www.youtube.com/channel/UCFjt4YyamB1Rrx96X-3fvmw' target='_blank' rel='noopener noreferrer'>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15.8 4.8C15.6 3.5 15 2.6 13.6 2.4C11.4 2 8 2 8 2C8 2 4.6 2 2.4 2.4C1 2.6 0.3 3.5 0.2 4.8C0 6.1 0 8 0 8C0 8 0 9.9 0.2 11.2C0.4 12.5 1 13.4 2.4 13.6C4.6 14 8 14 8 14C8 14 11.4 14 13.6 13.6C15 13.3 15.6 12.5 15.8 11.2C16 9.9 16 8 16 8C16 8 16 6.1 15.8 4.8ZM6 11V5L11 8L6 11Z' fill='#FF0000' />
                    </svg>
                  </a>
                </div>
                <p className='about__bio'>個人勢の幼女系VTuber。やりたいことをとことんやる！<br />Minecraftのスキン、テクスチャ作りが得意。UCRと今鯖の運営側。</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

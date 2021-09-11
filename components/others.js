import { Wrapper } from '@/layouts'

export default function Others () {
  return (
    <>
      <section className='others__container'>
        <Wrapper>
          <h1 className='others__title'>Others</h1>
          <p className='others__subtitle'>UCRとイマサバもチェック！</p>
          <div className='others__links'>
            <a className='others__link' href='https://twitter.com/ucresort' target='_blank' rel='noopener noreferrer'>
              <div className='others__link__wrapper'>
                <div className='hover-image others__link__image'>
                  <img src='/img/ucr.jpeg' alt='Universal Cube Resort' />
                </div>
                <div className='others__link__inner'>
                  <h1 className='others__link--title'>Universal Cube Resort</h1>
                  <p className='others__link--description'>MinecraftでUSJ再現グループ</p>
                </div>
              </div>
            </a>
            <a className='others__link' href='https://twitter.com/tdr_mcbe_server' target='_blank' rel='noopener noreferrer'>
              <div className='others__link__wrapper'>
                <div className='hover-image others__link__image'>
                  <img src='/img/is.png' alt='Imagination Server' />
                </div>
                <div className='others__link__inner'>
                  <h1 className='others__link--title'>Imagination Server</h1>
                  <p className='others__link--description'>MinecraftでTDR再現グループ</p>
                </div>
              </div>
            </a>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

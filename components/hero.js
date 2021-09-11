import { Wrapper } from '@/layouts'

export default function Hero () {
  return (
    <>
      <div className='hero__container'>
        <Wrapper>
          <div className='hero__inner'>
            <span className='hero__subtitle'>Welcome!</span>
            <h1 className='hero__title'>三ツ鳥かものサイトへ<br />ようこそ！</h1>
            <p className='hero__description'>これまでの作品やプロフィールをまとめています。<br className='sm-only' />ゆっくりしていってね。</p>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default function Header ({
  subtitle = 'subtitle',
  title = 'title'
}) {
  return (
    <>
      <div className='header__container'>
        <div className='header__inner'>
          <span className='header__subtitle'>{subtitle}</span>
          <h1 className='header__title'>{title}</h1>
        </div>
      </div>
    </>
  )
}

import Head from 'next/head'
import { useEffect, useState } from 'react'
import gsap from 'gsap'

export default function Preloader ({
  end,
  setPreloaderEnd
}) {
  useEffect(() => {
    if (end) {
      const tl = new gsap.timeline({
        delay: 0.4
      })

      tl
        .to('.preloader__loader', {
          opacity: 0,
          duration: 1,
          ease: 'expo.out'
        })
        .to('.preloader__title span', {
          delay: 0.1,
          duration: 0.36,
          transform: 'translateY(0)',
          filter: 'none',
          opacity: 1,
          ease: 'power3.out'
        })

      tl.call(_ => {
        setTimeout(() => {
          const path = document.querySelector('.preloader-overlays__path')

          toggle()
          path.style = null
        }, 800)
      })
    }
  }, [end])

  const param = {
    numPoints: 3,
    pathDelay: 0.2,
    duration: 0.9,
    ease: 'Power2.easeOut'
  }
  let isOpened = false
  let points = [100, 100, 100]
  const pointsDelay = [0.16, 0.08, 0.16]
  let isTransitionEnd = false

  const tl = new gsap.timeline({ onUpdate: render })

  function toggle () {
    isOpened = true

    for (let i = 0; i < param.numPoints; i++) {
      const config = {
        ease: param.ease
      }
      config[i] = 0
      const delay = pointsDelay[i]

      tl.to(points, param.duration, config, delay + param.pathDelay)
    }
  }

  function render () {
    if (process.browser && !isTransitionEnd) {
      const path = document.querySelector('.preloader-overlays__path')

      let d = ''
      d += isOpened ? `M 0 100 V ${points[0]} Q` : 'M 0 100 V 0 Q'

      d += isOpened ? ` 50 ${points[1]} 100 ${points[2]} ` : ' 50 0 100 0 '

      d += 'V 100 Z'
      path.setAttribute('d', d)

      let p = 0
      points.forEach(point => {
        p += point
      })
      if (p === 0) complete()
    }
  }

  function complete () {
    const path = document.querySelector('.preloader-overlays__path')
    document.querySelector('html').style = null

    isOpened = false
    points = [100, 100, 100]
    tl
      .set('.preloader__container', {
        opacity: 0
      })
      .to(path, {
        opacity: 0,
        duration: 0.2
      })
      .set(path, {
        visibility: 'hidden'
      })

    tl.call(_ => {
      setPreloaderEnd(true)
      isTransitionEnd = true
    })
  }

  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <div className={`preloader${end ? ' preloader-end' : ''}`}>
        <div className='preloader__container'>
          <div className='preloader__loader'>
            <img
              src='/img/icon.svg'
              alt='kamochan'
              className='preloader__loader--icon'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 127 32'
              fill='none'
              className='preloader__loader--text'
            >
              <path fill='#fff' d='M18.14,22.07l0-.57-6.82-1,.53-12H8l.53,15.46Z' />
              <path fill='#fff' d='M29.3,24c2.94,0,7-3.07,7-8,0-4.78-4-7.94-7-7.94s-7,3.12-7,7.94S26.35,24,29.3,24Zm.76-2c-1.8,0-4.41-2.24-4.41-7.51,0-2.63,1.27-4.39,2.9-4.39s4.36,2.46,4.36,7.43C32.91,20.19,31.71,22,30.06,22Z' />
              <path fill='#fff' d='M54.54,23.56,48.33,8l-3.25.49L39.8,23.83h.64l2-3.49,7.26-1.25,2.24,4.76Zm-5.27-5.38-5.19-.82,2.64-4.66Z' />
              <path fill='#fff' d='M59.53,23.87c6.82,0,10.6-2.05,11.77-5.84a9.08,9.08,0,0,0,.42-2.77c0-3.68-2.24-6.81-5.4-6.81a5.1,5.1,0,0,0-3.7,1.48l0-1.48H58.83Zm3.07-12.5a5.47,5.47,0,0,1,2.46-.6,6.61,6.61,0,0,1,.76.05c1.39.18,2.37,2.56,2.37,5a7.84,7.84,0,0,1-.3,2.2c-.44,1.46-2.09,3.16-5.54,4.34Z' />
              <path fill='#fff' d='M80.6,23.62l.53-15.17H77.19l.53,15.17Z' />
              <path fill='#fff' d='M98.79,23.87l.72-15.6H98.8l-2,7.81L90.56,8.45H87.15L88.4,23.87H89l1.63-11,7.68,11Z' />
              <path fill='#fff' d='M117.62,24l.49-9.27-7.37,1.8v.53l4,1,.38,4.62c-5.5-1.1-7-3.2-7-6.57,0-2.66,1.41-5.92,3-5.92s3.53,1,5.22,2.75l1.21-3.53a13.14,13.14,0,0,0-5.86-1.32c-3.43,0-7,3.22-7,9.42,0,3.92,3.43,6.52,12.09,6.52Z' />
              <rect width='127' height='32' />
            </svg>
          </div>
          <div className='preloader__title'>
            <span>Kamo Mitudori</span>
          </div>
        </div>
      </div>
      <svg className='preloader-overlays' viewBox='0 0 100 100' preserveAspectRatio='none'>
        <path className='preloader-overlays__path' fill='#fafafa' style={{ opacity: 0, visibility: 'hidden' }} />
      </svg>
    </>
  )
}

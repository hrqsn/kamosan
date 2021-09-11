import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group'
import gsap from 'gsap'

export default function Transition ({ router, children }) {
  const param = {
    numPoints: 3,
    pathDelay: 0.2,
    duration: 0.9,
    ease: 'Power2.easeOut'
  }
  let isOpened = false
  let points = [100, 100, 100]
  const pointsDelay = [0.16, 0.08, 0.16]

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
    if (process.browser) {
      const path = document.querySelector('.shape-overlays__path')

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
    const path = document.querySelector('.shape-overlays__path')

    isOpened = false
    points = [100, 100, 100]
    tl
      .to(path, {
        opacity: 0,
        duration: 0.5
      })
      .set(path, {
        visibility: 'hidden'
      })

    setTimeout(() => {
      document.querySelector('html').style = null
    }, 720)

    window.scrollTo(0, 0)
  }

  function enter () {
    const path = document.querySelector('.shape-overlays__path')
    document.querySelector('html').style = 'overflow: hidden'

    toggle()
    path.style = null
  }

  function exit () {}

  return (
    <>
      <TransitionGroup>
        <ReactTransition
          key={router.pathname}
          timeout={500}
          onEnter={enter}
          onExit={exit}
          in
          enter
          exit
          mountOnEnter
          unmountOnExit
        >
          <svg className='shape-overlays' viewBox='0 0 100 100' preserveAspectRatio='none'>
            <g>
              <path className='shape-overlays__path' fill='#fafafa' style={{ opacity: 0, visibility: 'hidden' }} />
            </g>
          </svg>
        </ReactTransition>
      </TransitionGroup>
    </>
  )
}

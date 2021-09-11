import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Transition, Preloader, Head } from '@/components'

import '@/styles/main.scss'

function MyApp ({ Component, pageProps, router }) {
  const [end, setEnd] = useState(false)
  const [preloaderEnd, setPreloaderEnd] = useState(false)

  const randomDelay = (min, max) => {
    return Math.random() * (max - min) + min
  }

  setTimeout(() => {
    setEnd(true)
  }, randomDelay(1000, 3600))

  return (
    <>
      <Head />
      {!preloaderEnd && <Preloader end={end} setPreloaderEnd={setPreloaderEnd} />}
      <Transition router={router} />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
      >
        {preloaderEnd && (
          <motion.div
            key={router.pathname}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.64,
              duration: 0.48,
              ease: 'easeOut'
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MyApp

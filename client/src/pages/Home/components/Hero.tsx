import { ReactComponent as Pattern } from '@/assets/patterns/home-pattern.svg'
import { ReactComponent as Abjd } from '@/assets/abjd.svg'
import { itemSlideUp, listAnimation, slideToLeft } from '@/utils/Animation'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/utils/routes'

export default function Hero() {
  return (
    <section className='py-20 mb-32 relative max-w-screen-xl mx-auto flex items-center justify-between xl:px-0 px-4'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        custom={0.2}
        variants={listAnimation}
        viewport={{ once: true }}
        className='flex flex-col items-start max-w-2xl'
      >
        <motion.h1
          variants={itemSlideUp}
          className='text-3xl md:text-header font-bold mb-4 z-10 md:mb-8 leading-normal'
        >
          Unlock Moroccan Culture: Learn Darija and Tamazight with
          <span
            className='
              ml-2
              relative
              z-10
              after:border-2
              after:border-primary-200
              after:rotate-2
              after:w-[130%]
              after:h-[145%]
              after:rounded-[100%]
              after:absolute
              after:top-1/2
              after:left-1/2
              after:-translate-x-1/2
              after:-translate-y-1/2
              before:border-2
              before:border-primary-200
              before:-rotate-12
              before:w-[130%]
              before:h-[145%]
              before:rounded-[100%]
              before:absolute
              before:top-1/2
              before:left-1/2
              before:-translate-x-1/2
              before:-translate-y-1/2
              xs:before:inline-flex
              before:hidden
            '
          >
            Ease!
          </span>
        </motion.h1>
        <motion.p
          variants={itemSlideUp}
          className='text-gray-500 leading-loose max-w-md mb-4 z-10 md:mb-8 text-sm'
        >
          Dive into the rich tapestry of Moroccan culture through its vibrant
          languages, Darija and Tamazight. Start your language journey today and
          open doors to an enchanting new world.
        </motion.p>

        <motion.button variants={itemSlideUp}>
          <Link
            className='relative bg-primary-100 z-10 px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-md shadow-primary-100 text-white capitalize font-bold text-sm hover:bg-primary-100/90'
            to={ROUTES.SIGNUP}
          >
            Get Started
          </Link>
        </motion.button>
      </motion.div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideToLeft}
        viewport={{ once: true }}
        className='lg:relative absolute top-0 right-0 lg:opacity-100 opacity-40'
      >
        <Pattern />
        <Abjd className='absolute max-w-2xl top-0 right-0 lg:block hidden' />
      </motion.div>
    </section>
  )
}

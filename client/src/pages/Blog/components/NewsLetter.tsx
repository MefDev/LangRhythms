import SectionTitle from '@/pages/Home/components/SectionTitle'
import { itemSlideUp, listAnimation } from '@/utils/Animation'
import { motion } from 'framer-motion'

export const NewsLetter = () => {
  return (
    <section className='bg-secondary-500/[3%] relative py-32 lg:px-0 px-2'>
      <div className='max-w-screen-md mx-auto'>
        <SectionTitle
          h3Text='Newsletter'
          h2Text='Subscribe To Our Newsletter'
        />
        <div className='mx-w lg mx-auto text-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            custom={0.2}
            variants={listAnimation}
            viewport={{ once: true }}
            className='-mt-10'
          >
            <motion.p
              variants={itemSlideUp}
              className='font-semibold text-gray-3 mb-6'
            >
              Get weekly Culture news, articles, and <br /> videos delivered to
              your inbox.
            </motion.p>
            <motion.form variants={itemSlideUp} className='mx-auto max-w-md'>
              <label htmlFor='search' className='sr-only'>
                Search
              </label>
              <div className='relative'>
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full focus:outline-none outline-none p-2.5'
                  placeholder='Email'
                  required
                />
                <button
                  type='submit'
                  className='absolute top-0 right-0 bottom-0 px-3 text-white bg-black rounded-r-lg border border-black hover:bg-black/80 h-auto'
                >
                  Subscribe
                  <span className='sr-only'>Subscribe</span>
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

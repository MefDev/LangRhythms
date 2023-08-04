import { AiOutlineStar } from 'react-icons/ai'
import SectionTitle from './SectionTitle'
import { LuUsers } from 'react-icons/lu'
import { LuMousePointerClick } from 'react-icons/lu'
import { itemSlideUp, listAnimation } from '@/utils/Animation'
import { motion } from 'framer-motion'

const chooseUsData = [
  {
    Icon: AiOutlineStar,
    bg: 'bg-secondary-200',
    shadow: 'shadow-secondary-200',
    title: 'Comprehensive & Customizable Learning',
    description:
      'Our platform accommodates learners of all proficiency levels. Choose your preferred dialect, set your pace, and personalize your learning path.',
  },
  {
    Icon: LuUsers,
    bg: 'bg-primary-200',
    shadow: 'shadow-primary-200',
    title: 'Supportive Learning Community',
    description:
      'Connect with fellow learners, share your experiences, ask questions, and practice with native speakers.',
  },
  {
    Icon: LuMousePointerClick,
    bg: 'bg-secondary-300',
    shadow: 'shadow-secondary-300',
    title: 'Engaging & Interactive Content',
    description:
      "With LangRhythms, you don't just learn – you interact, engage, and immerse yourself in a rich linguistic and cultural experience.",
  },
]

export default function ChooseUs() {
  return (
    <section className='py-20 mb-20 max-w-screen-xl mx-auto xl:px-0 px-4'>
      <SectionTitle
        h3Text='Why choose us'
        h2Text='Enjoyable & Rewarding Experience!'
      />
      <div className='flex flex-col gap-10'>
        {chooseUsData.map((data, index) => (
          <motion.article
            key={index}
            initial='hidden'
            whileInView='visible'
            custom={0.2}
            variants={listAnimation}
            viewport={{ once: true }}
            className={index === 1 ? 'sm:self-end' : ''}
          >
            <div className='flex flex-col sm:flex-row sm:items-start sm:space-y-0 sm:justify-normal items-center justify-center space-y-6 sm:space-x-6'>
              <motion.div
                variants={itemSlideUp}
                className={`${data.bg} w-20 h-20 rounded shadow-lg ${data.shadow} flex items-center justify-center`}
              >
                <data.Icon className='text-4xl text-white' />
              </motion.div>
              <div className='max-w-md sm:text-left text-center'>
                <motion.h6
                  variants={itemSlideUp}
                  className='text-2xl mb-2 font-bold text-gray-800'
                >
                  {data.title}
                </motion.h6>
                <motion.p
                  variants={itemSlideUp}
                  className='text-gray-500 leading-[1.6] text-sm'
                >
                  {data.description}
                </motion.p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

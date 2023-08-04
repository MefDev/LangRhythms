import { ReactComponent as Stars } from '@/assets/hand-stars.svg'
import { ReactComponent as Target } from '@/assets/target-star.svg'
import { ReactComponent as Globe } from '@/assets/glob.svg'
import { ReactComponent as Pattern } from '@/assets/patterns/zellige-pattern.svg'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'
import { itemSlideUp, listAnimation } from '@/utils/Animation'

const featuresData = [
  {
    Icon: Stars,
    bg: 'bg-primary-100',
    shadow: 'shadow-primary-100/40',
    title: 'Interactive Lessons',
    description:
      'Our lessons are designed to make learning an engaging experience.',
  },
  {
    Icon: Target,
    bg: 'bg-secondary-400',
    shadow: 'shadow-secondary-400/40',
    title: 'Personalized Learning',
    description: 'Tailor your learning path to your needs and pace',
  },
  {
    Icon: Globe,
    bg: 'bg-secondary-100',
    shadow: 'shadow-secondary-100/40',
    title: 'Community Support',
    description:
      'Connect with fellow learners and native speakers for real-time practice.',
  },
]

export default function Feature() {
  return (
    <section className='py-20 mb-20 bg-secondary-500/[1%] relative xl:px-0 px-4'>
      <Pattern className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      <SectionTitle
        h3Text='Our Features'
        h2Text='Features That Makes Learning Fun'
      />

      <motion.div
        className='grid lg:grid-cols-3 md:grid-cols-2 max-w-[369px] xl:gap-20 gap-10 sm:max-w-screen-xl mx-auto justify-center'
        initial='hidden'
        whileInView='visible'
        variants={listAnimation}
        viewport={{ once: true }}
      >
        {featuresData.map((data, index) => (
          <motion.div
            key={index}
            variants={itemSlideUp}
            className={`lg:p-10 p-4 ${data.bg} shadow-lg ${
              data.shadow
            } rounded-lg text-white ${
              index === featuresData.length - 1
                ? 'lg:col-span-1 md:col-span-2 justify-self-center'
                : ''
            }`}
          >
            <data.Icon className='mb-8' />
            <h4 className='mb-4 font-bold  text-xl'>{data.title}</h4>
            <p className='text-sm'>{data.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

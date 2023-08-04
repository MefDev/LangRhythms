import { itemSlideUp, listAnimation } from '@/utils/Animation'
import { motion } from 'framer-motion'

interface Props {
  h2Text: string
  h3Text: string
}

const SectionTitle: React.FC<Props> = ({ h2Text, h3Text }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      custom={0.1}
      variants={listAnimation}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center space-y-4 max-w-lg mx-auto mb-20'
    >
      <motion.h3
        variants={itemSlideUp}
        className='text-center text-blue-600 font-bold text-xs leading-snug uppercase'
      >
        {h3Text}
      </motion.h3>
      <motion.h2
        variants={itemSlideUp}
        className='text-center text-gray-800 font-bold sm:text-4xl text-2xl leading-relaxed'
      >
        {h2Text}
      </motion.h2>
    </motion.div>
  )
}

export default SectionTitle

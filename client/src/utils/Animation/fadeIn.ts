import transition from './transition'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({ opacity: 1, transition: { ...transition, delay: i } }),
}

export default fadeIn

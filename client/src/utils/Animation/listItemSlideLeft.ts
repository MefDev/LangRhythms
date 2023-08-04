import transition from './transition'

const itemSlideLeft = {
  visible: { opacity: 1, x: 0, transition: { ...transition } },
  hidden: { opacity: 0, x: 100 },
}

export default itemSlideLeft

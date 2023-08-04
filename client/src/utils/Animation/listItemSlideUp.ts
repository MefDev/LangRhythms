import transition from './transition'

const itemSlideUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...transition,
    },
  },
  hidden: { opacity: 0, y: 100 },
}

export default itemSlideUp

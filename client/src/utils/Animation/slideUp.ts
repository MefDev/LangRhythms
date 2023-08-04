import transition from './transition';

const slideUp = {
    hidden: {y: 100, opacity: 0},
    visible: (i=0) => ({y: 0, opacity: 1, transition: {...transition, delay: i} })
};

export default slideUp;

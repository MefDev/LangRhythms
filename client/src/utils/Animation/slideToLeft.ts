import transition from "./transition";

const slideToLeft = {
    hidden: {x: 100, opacity: 0},
    visible: (i=0) => ({x: 0, opacity: 1, transition: {
        ...transition,
        delay: i
    }})
}

export default slideToLeft;

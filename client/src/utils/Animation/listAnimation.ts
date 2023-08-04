const list = {
    visible: (i=0.3) => ({
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delay: i
      },
    }),
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
}

export default list;

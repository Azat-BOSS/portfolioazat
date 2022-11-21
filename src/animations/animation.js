const container = {
  show: {
    transition: {
      staggerChildren: 0.35
    }
  }
}

const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, .01, -.05, .95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: .8
    }
  }
}

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
    visibility: "hidden"
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    visibility: "visible",
    transition: {
      delay: custom * 0.2,
      duration: custom * 0.6,
      type: "spring"
    },
  }),
};

const textAnimationZen = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: custom * 0.6,
      type: "spring",
    },
  }),
};

const textAnimationProjito = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: custom * 0.6,
      type: "spring",
    },
  }),
};

const textAnimationAbout = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: custom * 0.6,
      type: "spring",
    },
  }),
};

export { 
  container,
  item,
  textAnimation,
  textAnimationZen,
  textAnimationProjito,
  textAnimationAbout
}
const projectCardAnimation = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const projectCardImageAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const projectCardTitleAnimation = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const projectCardDescriptionAnimation = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
      duration: 1.2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const projectCardTechAnimation = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.6,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const projectCardLinksAnimation = {
  hidden: {
    opacity: 0,
    y: -150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

export {
  projectCardAnimation,
  projectCardImageAnimation,
  projectCardTitleAnimation,
  projectCardDescriptionAnimation,
  projectCardTechAnimation,
  projectCardLinksAnimation,
}

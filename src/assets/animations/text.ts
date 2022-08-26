export const leftToRight = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
}
export const rightToLeft = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
}
export const topToBottom = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
}
export const bottomToTop = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
}

export const TextAnimations = {
  leftToRight,
  rightToLeft,
  topToBottom,
  bottomToTop,
}

export const fadeIn = (
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
)=> ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});


export const scaleIn = () => ({
  hidden: {
    scale: 0.5,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 6,
      delay: 0,
      ease: "easeOut",
    },
  },
});
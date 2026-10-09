import { motion } from 'framer-motion'

/**
 * A very subtle fade on route change. Kept short and quiet so the site still
 * feels elegant and readable when animations are disabled by the user.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

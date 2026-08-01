import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Outlet } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

export default function PageTransition() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

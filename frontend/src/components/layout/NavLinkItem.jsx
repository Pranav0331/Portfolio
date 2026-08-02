import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavLinkItem({ to, label, end, onClick, mobile = false }) {
  return (
    <NavLink to={to} end={end} onClick={onClick} className="group relative">
      {({ isActive }) => (
        <>
          <span
            className={`block text-sm font-medium tracking-[-0.01em] transition-colors duration-200 ${
              mobile ? 'py-2.5' : 'py-1'
            } ${
              isActive
                ? 'text-blue-500 dark:text-blue-400'
                : 'text-themed-muted hover:text-themed'
            }`}
          >
            {label}
          </span>
          {isActive && !mobile && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            />
          )}
          {isActive && mobile && (
            <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-blue-500" />
          )}
        </>
      )}
    </NavLink>
  );
}

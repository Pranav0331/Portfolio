import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavLinkItem({ to, label, end, onClick, mobile = false }) {
  return (
    <NavLink to={to} end={end} onClick={onClick} className="group relative block w-full">
      {({ isActive }) => (
        <>
          <span
            className={`block text-sm font-medium tracking-[-0.01em] transition-all duration-200 ${
              mobile
                ? 'py-2.5 px-3.5 rounded-xl'
                : 'py-1'
            } ${
              isActive
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-themed-muted hover:text-themed'
            } ${mobile && isActive ? 'bg-blue-500/10 dark:bg-blue-500/15' : mobile ? 'hover:bg-slate-500/5' : ''}`}
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
            <span className="absolute left-1 top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-blue-500" />
          )}
        </>
      )}
    </NavLink>
  );
}

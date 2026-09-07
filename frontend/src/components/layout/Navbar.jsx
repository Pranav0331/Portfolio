import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import NavLinkItem from './NavLinkItem';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/hackathons', label: 'Hackathons' },
  { to: '/experience', label: 'Experience' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close mobile menu on screen resize if enlarged to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <nav
        aria-label="Main navigation"
        className="glass-nav mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-5"
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-[15px] font-semibold tracking-[-0.02em] text-themed transition-opacity hover:opacity-80 shrink-0"
        >
          Pranav Mathur
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-0.5">
            {links.map(({ to, label, end }) => (
              <li key={to} className="shrink-0 px-1.5 sm:px-2.5">
                <NavLinkItem to={to} label={label} end={end} />
              </li>
            ))}
          </ul>
          <div className="ml-3 border-l pl-3" style={{ borderColor: 'var(--nav-divider)' }}>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-themed-muted hover:text-themed hover:bg-slate-500/10 transition-colors focus:outline-none"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="glass-nav mx-auto mt-2 max-w-6xl overflow-hidden p-3 shadow-xl md:hidden"
          >
            <ul className="flex flex-col space-y-1">
              {links.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLinkItem
                    to={to}
                    label={label}
                    end={end}
                    mobile
                    onClick={() => setIsOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

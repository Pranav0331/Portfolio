import { Link } from 'react-router-dom';
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
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <nav
        aria-label="Main navigation"
        className="glass-nav mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-5"
      >
        <Link
          to="/"
          className="text-[15px] font-semibold tracking-[-0.02em] text-themed transition-opacity hover:opacity-80"
        >
          Pranav Mathur
        </Link>

        <div className="flex items-center gap-1">
          <ul className="flex items-center gap-0.5 overflow-x-auto">
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
      </nav>
    </header>
  );
}

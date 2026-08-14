import {
  GitHubIcon,
  LinkedInIcon,
  CodeChefIcon,
  HackerRankIcon,
} from '../ui/SocialIcons';

const footerLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Pranav0331',
    icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/pranavmathur31',
    icon: LinkedInIcon,
  },
  {
    label: 'CodeChef',
    href: 'https://www.codechef.com/users/pranavmathur31',
    icon: CodeChefIcon,
  },
  {
    label: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/pranavmathur36',
    icon: HackerRankIcon,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t" style={{ borderColor: 'var(--footer-border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass-icon-btn"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-sm text-themed-subtle">
          &copy; {year} Pranav Mathur. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import { SiCodechef, SiHackerrank } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function GitHubIcon({ className = 'h-5 w-5' }) {
  return (
    <FaGithub
      className={`${className} transition-colors duration-200`}
      aria-hidden="true"
      style={{ color: '#181717' }}
    />
  );
}

export function LinkedInIcon({ className = 'h-5 w-5' }) {
  return (
    <FaLinkedin
      className={`${className} transition-colors duration-200`}
      aria-hidden="true"
      style={{ color: '#0A66C2' }}
    />
  );
}
export function CodeChefIcon({ className = 'h-5 w-5' }) {
  return (
    <SiCodechef
      className={className}
      aria-hidden="true"
      style={{ color: '#F26A00' }}
    />
  );
}

export function HackerRankIcon({ className = 'h-5 w-5' }) {
  return (
    <SiHackerrank
      className={className}
      aria-hidden="true"
      style={{ color: '#2EC866' }}
    />
  );
}

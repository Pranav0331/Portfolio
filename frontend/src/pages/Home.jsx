import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Download,
  FolderKanban,
  Code2,
  Server,
  Wrench,
  Braces,
  Database,
  GitBranch,
  Globe,
  Palette,
  Wind,
} from 'lucide-react';
import {
  GitHubIcon,
  LinkedInIcon,
  CodeChefIcon,
  HackerRankIcon,
} from '../components/ui/SocialIcons';
import PageMeta from '../components/layout/seo/PageMeta';
import HomeBackground from '../components/home/HomeBackground';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stats = [
  { value: '7+', label: 'Projects Built' },
  { value: '🥈 2nd', label: 'Cognitive Chaos Hackathon' },
  { value: '100+', label: 'DSA Problems' },
  { value: '2★', label: 'CodeChef' },
  { value: '2024', label: 'Engineering Started' },
];

const socialLinks = [
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

const techStack = [
  {
    title: 'Frontend',
    icon: Globe,
    accent: 'from-blue-500/15 to-sky-500/8',
    iconColor: 'text-blue-400',
    items: [
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Palette },
      { name: 'JavaScript', icon: Braces },
      { name: 'React', icon: Code2 },
      { name: 'Tailwind CSS', icon: Wind },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: 'from-blue-600/15 to-blue-500/8',
    iconColor: 'text-blue-400',
    items: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Code2 },
      { name: 'MongoDB', icon: Database },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    accent: 'from-sky-500/15 to-blue-500/8',
    iconColor: 'text-sky-400',
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'VS Code', icon: Code2 },
      // { name: 'Postman', icon: Wrench },
    ],
  },
];

function TechItem({ name, icon: Icon }) {
  return (
    <span className="glass inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-themed-muted transition-colors duration-300 hover:border-blue-400/25 hover:text-themed">
      <Icon className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
      {name}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <PageMeta
        title="Pranav Mathur | Software Engineering Student"
        description="Portfolio of Pranav Mathur — Software Engineering student focused on full-stack development, algorithms, and building practical software."
      />

      <div className="relative overflow-hidden">
        <HomeBackground />

        <section className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10 xl:gap-16"
          >
            <div>
              <motion.div variants={item}>
                <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium text-themed-muted">
                  <span className="status-dot" aria-hidden="true" />
                  Available for Internships &amp; Opportunities
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="mt-6 text-4xl font-bold tracking-tight text-themed sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
              >
                Hi, I&apos;m{' '}
                <span className="gradient-text">Pranav Mathur</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-4 text-lg font-medium text-themed-muted sm:text-xl"
              >
                Software Engineering Student | Web Developer | DSA Enthusiast
              </motion.p>

              <motion.p
                variants={item}
                className="mt-6 max-w-xl text-base leading-relaxed text-themed-muted sm:text-lg"
              >
                Passionate about building modern web applications and solving complex
                problems through clean code and scalable solutions. Currently focused on
                Full Stack Development and Data Structures &amp; Algorithms.
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="glass-btn-primary group"
                >
                  <FolderKanban className="mr-2 h-4 w-4" aria-hidden="true" />
                  View Projects
                </Link>
                <a
                  href="/resume.pdf"
                  download="Pranav_Mathur_Resume.pdf"
                  className="glass-btn text-themed-muted"
                >
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              </motion.div>

              <motion.div variants={item} className="mt-6 flex flex-wrap gap-2.5">
                {socialLinks.map(({ label, href, icon: Icon }) => (
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
              </motion.div>

              <motion.div
                variants={item}
                className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card px-3 py-3.5 text-center"
                  >
                    <p className="text-xl font-bold gradient-text sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium leading-tight text-themed-subtle sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={item} className="flex justify-center lg:justify-end lg:-translate-y-16">
              <div className="relative animate-float">
                <div
                  className="absolute inset-0 -z-10 scale-110 animate-glow-pulse rounded-full bg-gradient-to-br from-blue-700 via-blue-600 to-slate-800 blur-3xl"
                  aria-hidden="true"
                />

                <div className="glass relative rounded-full p-[1.5px] shadow-glow-sm">
                  <img
                    src="/profile.jpeg"
                    alt="Pranav Mathur"
         
                  className="h-80 w-80 md:h-96 md:w-96 lg:h-[380px] lg:w-[380px] rounded-full object-cover object-[center_10%]"
                    
                     
                  />

                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="relative z-10 mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-themed sm:text-3xl">
                Tech <span className="gradient-text">Stack</span>
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-sm text-themed-muted">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {techStack.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="glass-card group relative overflow-hidden p-5"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div className="mb-4 flex items-center gap-2.5">
                      <div className="glass flex h-9 w-9 items-center justify-center rounded-lg">
                        <group.icon className={`h-4 w-4 ${group.iconColor}`} />
                      </div>
                      <h3 className="text-base font-semibold text-themed">{group.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((tech) => (
                        <TechItem key={tech.name} {...tech} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
